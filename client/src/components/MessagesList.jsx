import Bubble from './Bubble.jsx';
import React from 'react';
import { useSocket } from '../context/SocketContext.jsx';

export default function MessageList() {
  const { socket, messages } = useSocket();

  return (
    <div className={'mt-20 mb-16 h-full'}>
      <div className='container mx-auto flex flex-col space-y-4 p-4'>
        {messages.map((message) => (
          <Bubble key={message._id} message={message} isSelf={socket && socket.id === message.from} />
        ))}
      </div>
    </div>
  );
}
