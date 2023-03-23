import React from 'react';
import MessageList from './components/MessagesList.jsx';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import messages from './data/messages.json';

export default function App() {
  // TODO: Get messages from the server
  return (
    <div className='relative bg-white text-black'>
      <Header />
      <MessageList messages={messages} />
      <Input />
    </div>
  );
}
