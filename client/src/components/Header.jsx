import React from 'react';
import Avatar from './Avatar.jsx';
import { IconDots } from '@tabler/icons-react';
import PropTypes from 'prop-types';

export default function Header() {
  // TODO: Get last seen and users from the server
  const lastSeen = 5;
  const users = ['Alice', 'Bob', 'Charlie', 'Diana'];

  return (
    <header className='border-b px-4 py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div
            className={
              'flex [&>*:first-child]:ml-0 [&>*]:-ml-2 [&>*]:border-l-4 [&>*]:border-white [&>:first-child]:border-l-0'
            }
          >
            {users.map((user) => (
              <div className='rounded-full' key={user}>
                <Avatar name={user} />
              </div>
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
      </div>
    </header>
  );
}

Header.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  lastSeen: PropTypes.number,
};
