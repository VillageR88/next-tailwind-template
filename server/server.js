const webSocketsServerPort = 8080;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort, () => {
    const address = server.address();
    console.log(`Server is listening at http://${address.address}:${address.port}`);
});

const wsServer = new webSocketServer({
    httpServer: server,
    autoAcceptConnections: false, // Set to accept calls manually
});

const clients = {};

// Function generating unique ID for all users
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

// A function that checks whether a source is allowed
function originIsAllowed(origin) {
    //In the example we return true for each source - This should be adapted to your actual security requirements
    return true;
}

wsServer.on('request', (request) => {
    if (!originIsAllowed(request.origin)) {
        // Reject the connection if the source is not allowed
        request.reject();
        console.log(`${new Date()} Connection from origin ${request.origin} rejected.`);
        return;
    }

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
