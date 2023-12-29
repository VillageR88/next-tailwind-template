const webSocketServer = require('websocket').server;
const http = require('http');

const webSocketsServerPort = 8080;
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

// Function to broadcast a message to all connected clients
const broadcast = (message) => {
    Object.keys(clients).forEach((clientID) => {
        clients[clientID].connection.sendUTF(message);
    });
};

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
    clients[userID] = { connection, username: null };
    console.log(`Connected: ${userID} in ${Object.getOwnPropertyNames(clients)}`);

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            try {
                const receivedData = JSON.parse(message.utf8Data);

                if (receivedData.type === 'USERNAME') {
                    clients[userID].username = receivedData.username;
                    console.log(`${userID} set username to: ${receivedData.username}`);

                    // Sending a message to all connected clients about the new user
                    broadcast(`${receivedData.username} joined the server`);
                } else if (receivedData.type === 'CHAT') {
                    const chatMessage = receivedData.message;
                    const senderUsername = clients[userID].username;

                    // Broadcast chat message to all connected clients with sender's username prefix
                    Object.keys(clients).forEach((clientID) => {
                        const recipientUsername = clients[clientID].username;
                        const prefixedMessage = `${senderUsername}: ${chatMessage}`;

                        if (recipientUsername !== null) {
                            clients[clientID].connection.sendUTF(prefixedMessage);
                            console.log(`Sent Chat Message to ${recipientUsername}: ${chatMessage}`);
                        }
                    });
                } else {
                    // Handling other types of data messages
                    // Process the different types of data messages here based on receivedData.type
                    console.log('Received Data Message:', receivedData);
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        }
    });

    connection.on('close', () => {
        console.log(`Connection closed for ${userID}`);
        delete clients[userID];
    });
});
