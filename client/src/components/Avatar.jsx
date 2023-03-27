import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ name, initial = true }) {
  const [color, setColor] = React.useState('bg-gray-800');

  useEffect(() => {
    const colors = [
      'bg-blue-800',
      'bg-red-800',
      'bg-green-800',
      'bg-yellow-800',
      'bg-purple-800',
      'bg-pink-800',
      'bg-gray-800',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, [name]);

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-sm font-semibold leading-none text-white ${color}`}
    >
      {initial ? name[0].toUpperCase() : name}
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  initial: PropTypes.bool,
};
