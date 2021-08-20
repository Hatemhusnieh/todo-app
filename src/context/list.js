import React, { useState, useEffect } from 'react';
export const ListContext = React.createContext();
import axios from 'axios';
const API = process.env.REACT_APP_URL;
import { v4 as uuid } from 'uuid';
import cookie from 'react-cookies';

function list(props) {
  const [list, setList] = useState([]);
  const [values, setValues] = useState({});
  const [incomplete, setIncomplete] = useState([]);
  const [number, setNumber] = useState(3);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [storage, setLocalStorage] = useState(0);

  async function handleSubmit(event) {
    if (event) event.preventDefault();
    values.complete = false;
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    event.target.reset();
    setList([...list, values]);
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post(`${API}/todo`, values, config);
  }

  function handleChange(event) {
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  }

  async function toggleComplete(id) {
    let obj;
    const items = list.map((item) => {
      if (item._id == id) {
        item.complete = !item.complete;
        obj = { complete: item.complete };
      }
      return item;
    });
    setList(items);
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.put(`${API}/todo/${id}`, obj, config);
  }

  function handleNumber(e) {
    setNumber(Number(e.target.value));
  }

  function handleIncomplete() {
    setShowIncomplete(!showIncomplete);
  }

  function save(e) {
    e.preventDefault();
    const obj = { number: e.target.pageNumber.value, showIncomplete: e.target.incomplete.value };
    localStorage.setItem('settings', JSON.stringify(obj));
    setLocalStorage(storage + 1);
  }

  async function deleteItem(id) {
    const items = list.filter((item) => item._id !== id);
    setList(items);
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(`${API}/todo/${id}`, config);
  }

  useEffect(() => {
    let local = localStorage.getItem('settings');
    if (local) {
      let settings = JSON.parse(local);
      setNumber(Number(settings.number));
      if (settings.showIncomplete == 'true') setShowIncomplete(true);
      if (settings.showIncomplete == 'false') setShowIncomplete(false);
    }
  }, [storage]);

  useEffect(async () => {
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const req = await axios.get(`${API}/todo`, config);
    setList(req.data);
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
        handleSubmit,
        handleChange,
        incomplete,
        toggleComplete,
        number,
        handleNumber,
        showIncomplete,
        handleIncomplete,
        save,
        deleteItem,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
}

export default list;
