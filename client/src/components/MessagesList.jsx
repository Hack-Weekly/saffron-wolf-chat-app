import Bubble from './Bubble.jsx';
import React from 'react';

export default function MessageList({ messages }) {
  return (
    <div className='p-4'>
      <div className='container mx-auto flex flex-col space-y-4'>
        {messages.map((message) => (
          // TODO: Proper check if the message is from the current user
          <Bubble key={message.id} message={message} isSelf={message.from.length === 4} />
        ))}
      </div>
    </div>
  );
}
