import React from 'react';
import ListContext from './context/list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDo from './components/to-do/todo';
import Header from './components/header/Header';
import Setting from './components/setting/Setting';
export default function App() {
  return (
    <>
      <ListContext>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ToDo />
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
          </Switch>
        </BrowserRouter>
      </ListContext>
    </>
  );
}
