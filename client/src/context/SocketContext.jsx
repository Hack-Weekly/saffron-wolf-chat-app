import { createContext, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../config/constants.js';
import { io } from 'socket.io-client';
import React from 'react';

export const SocketContext = createContext({});

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }) {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/getAllMessages`);
      return await response.json();
    }

    fetchData().then((res) => {
      setMessages(res);
    });
  }, []);

  useEffect(() => {
    if (!isConnected) {
      socket.current = io(API_URL);

      console.log('Socket created');
      console.log(socket.current);

      socket.current.on('connect', () => {
        console.info(`Successfully connected`);
        setConnected(true);
      });

      socket.current.on('disconnect', () => {
        console.info(`Successfully disconnected`);
        setConnected(false);
      });

      socket.current.on('error', (err) => {
        console.log('Socket Error:', err.message);
      });

      socket.current.on('join', () => {
        console.log('Socket join');
      });

      socket.current.on('message', (message) => {
        console.log('Socket message received');
        console.log(message);
        setMessages((messages) => [...messages, message]);
      });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  return <SocketContext.Provider value={{ socket: socket.current, messages }}>{children}</SocketContext.Provider>;
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    socket: PropTypes.object,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        created_on: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
};
