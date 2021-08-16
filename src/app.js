import React from 'react';
import ListContext from './context/list';
import ToDo from './components/todo';

export default function App() {
  return (
    <ListContext>
      <ToDo />
    </ListContext>
  );
}
