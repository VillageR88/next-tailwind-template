import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const WebSocketChat = () => {
  const [client, setClient] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newClient = new W3CWebSocket('ws://192.168.1.109:8080');

    newClient.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    newClient.onclose = () => {
      console.log('WebSocket Client Disconnected');
    };

    newClient.onerror = (error) => {
      console.error('Connection Error:', error);
    };

    newClient.onmessage = (message) => {
      if (message.data instanceof Blob) {
        // Handle binary data
      } else {
        setMessages((prevMessages) => [...prevMessages, message.data]);
      }
    };

    setClient(newClient);

    return () => {
      if (newClient) {
        newClient.close();
      }
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const sendMessage = () => {
    if (client && messageInput.trim() !== '') {
      client.send(messageInput);
      setMessageInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div>
        <input type="text" value={messageInput} onChange={handleMessageChange} placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default WebSocketChat;
