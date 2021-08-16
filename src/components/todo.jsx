import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
import { ListContext } from '../context/list';

const ToDo = () => {
  const listObject = useContext(ListContext);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = listObject.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [listObject.list]);

  return (
    <div style={{ width: '%100' }}>
      <Header incomplete={incomplete} />
      <Form />
      <List />
    </div>
  );
};

export default ToDo;
