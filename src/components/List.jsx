import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/list';

function List() {
  const { list, toggleComplete } = useContext(ListContext);
  const [start, setStart] = useState(0);
  const [pages, setPages] = useState(3);
  const [filter, setFilter] = useState([]);

  function next(num) {
    if (start + num < 0) return;
    setStart(start + num);
    setPages(pages + num);
  }

  function onlyIncomplete() {
    if (filter == list) setFilter(() => filter.filter((item) => item.complete != true));
    else setFilter(list);
  }

  useEffect(() => {
    setFilter(list);
  }, [list]);
  return (
    <>
      <button onClick={onlyIncomplete}>only incomplete {filter == list ? 'off' : 'on'}</button>
      {filter.slice(start, pages).map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <button onClick={() => next(-3)}>back</button>
      <button onClick={() => next(3)}>next</button>
    </>
  );
}

export default List;
