import React, { useEffect, useContext } from 'react';
import Header from '../header/Header';
import Form from './form/Form';
import List from './list/List';
import { ListContext } from '../../context/list';
import './to-do.scss';

const ToDo = () => {
  const listObject = useContext(ListContext);
  const { list, incomplete } = listObject;

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  useEffect(() => {
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <div className="form-list">
        <Form />
        <List />
      </div>
    </>
  );
};

export default ToDo;
