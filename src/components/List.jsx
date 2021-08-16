import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/list';
import './main.scss';
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

  const listOfTodos = filter.slice(start, pages).map((item) => {
    const deff = item.difficulty > 3 ? 'hard' : 'easy';
    return (
      <li key={item.id} ng-repeat="notebook in notebooks">
        <p>todo: {item.text}</p>
        <p>Assigned to: {item.assignee}</p>
        <p>difficulty : {deff}</p>

        <div class="right top" onClick={() => toggleComplete(item.id)}>
          {item.complete.toString()}
        </div>
      </li>
    );
  });

  return (
    <div className="listContainer">
      <button onClick={onlyIncomplete}>only incomplete {filter == list ? 'off' : 'on'}</button>
      <ul>{listOfTodos}</ul>
      <button onClick={() => next(-3)}>back</button>
      <button onClick={() => next(3)}>next</button>
    </div>
  );
}

export default List;
