import React, { useEffect } from 'react';

export default function Avatar({ name }) {
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
    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${color}`}>
      {name[0].toUpperCase()}
    </div>
  );
}
