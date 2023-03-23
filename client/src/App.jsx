import React, { useEffect, useState } from 'react';
import MessageList from './components/MessagesList.jsx';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import { API_URL } from './config/constants.js';

export default function App() {
  // TODO: Move this to a context component?
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/getAllMessages`);
      return await response.json();
    }

    fetchData().then((res) => {
      setMessages(res);
    });
  }, []);

  return (
    <div className='relative bg-white text-black'>
      <Header />
      <MessageList messages={messages} />
      <Input />
    </div>
  );
}
