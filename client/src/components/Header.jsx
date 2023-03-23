import React from 'react';
import Avatar from './Avatar.jsx';
import { IconDots } from '@tabler/icons-react';
import PropTypes from 'prop-types';

export default function Header() {
  // TODO: Get last seen and users from the server
  const lastSeen = 5;
  const users = ['Alice', 'Bob', 'Charlie', 'Diana'];

  return (
    <div className='fixed inset-x-0 top-0 z-50 h-20 border-b bg-white'>
      <header className='container mx-auto h-full h-full px-4 py-2'>
        <div className='flex h-full items-center justify-between space-x-4'>
          <div
            className={
              'flex [&>*:first-child]:ml-0 [&>*]:-ml-2 [&>*]:border-l-4 [&>*]:border-white [&>:first-child]:border-l-0'
            }
          >
            {users.map((user) => (
              <Avatar name={user} key={user} />
            ))}
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold'>Chat App</h1>
            <h2 className='text-sm text-gray-500'>Last seen {lastSeen} ago</h2>
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
