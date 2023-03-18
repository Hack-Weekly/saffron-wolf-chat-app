import { IconMoodSmile, IconSend } from '@tabler/icons-react';
import React from 'react';

export default function Input() {
  // TODO: Send message to the server
  return (
    <div className='border-t p-2 px-4'>
      <div className='container mx-auto flex items-center justify-between space-x-4'>
        <button className='flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-100'>
          <IconMoodSmile />
        </button>
        <input type='text' className='flex-grow p-1 focus:outline-none' placeholder='Start typing...' />
        <button className='flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-100'>
          <IconSend />
        </button>
      </div>
    </div>
  );
}
