const webSocketsServerPort = 8080;
const webSocketServer = require('websocket').server;
const http = require('http');

// Tworzenie serwera HTTP
const server = http.createServer();
server.listen(webSocketsServerPort);
console.log(`Listening on port ${webSocketsServerPort}`);

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};

// Funkcja generująca unikalne ID dla każdego użytkownika
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

wsServer.on('request', (request) => {
  const userID = getUniqueID();
  console.log(`${new Date()} Received a new connection from origin ${request.origin}.`);

  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log(`Connected: ${userID} in ${Object.getOwnPropertyNames(clients)}`);

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log('Received Message:', message.utf8Data);

      // Broadcast message to all connected clients
      Object.keys(clients).forEach((clientID) => {
        clients[clientID].sendUTF(message.utf8Data);
        console.log('Sent Message to:', clientID);
      });
    }
  });

  connection.on('close', () => {
    console.log(`Connection closed for ${userID}`);
    delete clients[userID];
  });
});
