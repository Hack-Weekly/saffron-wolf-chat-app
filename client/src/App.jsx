import React from 'react';
import MessageList from './components/MessagesList.jsx';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import messages from './data/messages.json';

export default function App() {
  // TODO: Get messages from the server
  return (
    <div className='relative bg-white text-black'>
      <div className='sticky top-0 z-50 bg-white'>
        <Header />
      </div>
      <MessageList messages={messages} />
      <div className='sticky bottom-0 z-50 bg-white'>
        <Input />
      </div>
    </div>
  );
}
