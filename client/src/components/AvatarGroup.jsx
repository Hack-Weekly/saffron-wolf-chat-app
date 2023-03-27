import PropTypes from 'prop-types';
import Avatar from './Avatar.jsx';
import React from 'react';

export default function AvatarGroup({ users, maxCount }) {
  const usersToShow = users.slice(0, maxCount);

  return (
    <div className='flex [&>*:first-child]:ml-0 [&>*]:-ml-2'>
      {usersToShow.map((user) => (
        <Avatar key={user.id} name={user.name} />
      ))}
      {users.length > maxCount && <Avatar name={`+${users.length - maxCount}`} initial={false} />}
    </div>
  );
}

AvatarGroup.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  maxCount: PropTypes.number,
};
