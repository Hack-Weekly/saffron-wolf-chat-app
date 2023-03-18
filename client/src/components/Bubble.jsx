import Avatar from './Avatar.jsx';
import React from 'react';

export default function Bubble({ message, isSelf }) {
  return (
    <div className={`flex space-x-4 ${isSelf && 'justify-end'}`}>
      {!isSelf && (
        <div className='shrink-0'>
          <Avatar name={message.from} />
        </div>
      )}
      <div className={`relative flex flex-col rounded p-2 ${isSelf ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
        <div
          className={`absolute top-0 border-b-[24px] border-transparent 
          ${isSelf ? '-right-2.5 border-l-[24px] border-l-blue-600' : '-left-2.5 border-r-[24px] border-r-gray-100'}`}
        />
        <div className='z-10'>
          <div className='mb-1 font-bold'>{message.from}</div>
          <p className='text-lg'>{message.text}</p>
        </div>
      </div>
    </div>
  );
}
