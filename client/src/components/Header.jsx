import React from 'react';
import { IconDots } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import AvatarGroup from './AvatarGroup.jsx';

export default function Header() {
  // TODO: Get users from the server
  const users = [
    { id: 1, name: 'Rand' },
    { id: 2, name: 'Donnell' },
    { id: 3, name: 'Jacklin' },
    { id: 4, name: 'Lynnea' },
    { id: 5, name: 'Jobina' },
    { id: 6, name: 'Kissie' },
  ];

  return (
    <div className='fixed inset-x-0 top-0 z-50 h-20 border-b bg-white'>
      <header className='container mx-auto h-full h-full px-4 py-2'>
        <div className='flex h-full items-center justify-between space-x-4'>
          <div>{users && <AvatarGroup users={users} maxCount={3} />}</div>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold'>Chat App</h1>
            <h2 className='text-sm text-gray-500'>Last seen {new Date().toLocaleString()}</h2>
          </div>
          <button className='flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-100'>
            <IconDots />
          </button>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  lastSeen: PropTypes.number,
};
