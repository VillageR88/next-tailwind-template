// WebSocketComponent.js
import React, { useState, useEffect, useMemo } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const socket = useMemo(() => new WebSocket('ws://localhost:8080'), []);

  useEffect(() => {
    socket.onopen = () => {
      console.log('Connected to the server');
    };

    socket.onmessage = (event: MessageEvent) => {
      const receivedData: string = typeof event.data === 'string' ? event.data : '';
      setMessages((prevMessages) => [...prevMessages, receivedData]);
    };

    return () => {
      socket.close();
    };
  }, [socket]);

  const sendMessage = () => {
    socket.send(input);
    setInput('');
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketComponent;
