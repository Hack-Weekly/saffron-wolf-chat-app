import { IconMoodSmile, IconSend } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useSocket } from '../context/SocketContext.jsx';

export default function Input() {
  // TODO: Send message to the server
  const [message, setMessage] = useState('');
  const { socket } = useSocket();

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      console.log('Sending message: ', message);
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 h-16 border-t bg-white'>
      <div className='container mx-auto h-full p-2 px-4'>
        <form onSubmit={sendMessage} className='flex h-full h-full items-center justify-between space-x-4'>
          <button
            type={'button'}
            className='flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-100'
          >
            <IconMoodSmile />
          </button>
          <input
            type={'text'}
            className='block h-full flex-grow p-1 focus:outline-none'
            placeholder='Start typing...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type={'submit'}
            className='flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-100'
          >
            <IconSend />
          </button>
        </form>
      </div>
    </div>
  );
}
