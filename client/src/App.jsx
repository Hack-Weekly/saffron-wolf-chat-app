import React from 'react';
import MessageList from './components/MessagesList.jsx';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import { SocketProvider } from './context/SocketContext';

export default function App() {
  return (
    <SocketProvider>
      <div className='relative bg-white text-black'>
        <Header />
        <MessageList />
        <Input />
      </div>
    </SocketProvider>
  );
}
