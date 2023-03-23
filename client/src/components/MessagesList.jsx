import Bubble from './Bubble.jsx';
import React from 'react';
import PropTypes from 'prop-types';

export default function MessageList({ messages }) {
  return (
    <div className={'mt-20 mb-16 h-full'}>
      <div className='container mx-auto flex flex-col space-y-4 p-4'>
        {messages.map((message) => (
          // TODO: Proper check if the message is from the current user
          <Bubble key={message.id} message={message} isSelf={message.from.length === 4} />
        ))}
      </div>
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      created_on: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
