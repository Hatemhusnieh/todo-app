import React, { useContext } from 'react';
import ListContext from './context/list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDo from './components/to-do/todo';
import Header from './components/header/Header';
import Setting from './components/setting/Setting';
import LogIn from './components/login/Login';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth';

export default function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <ListContext>
        <BrowserRouter>
          <Header />
          <If condition={!loggedIn}>
            <Then>
              <LogIn />
            </Then>
            <Else>
              <Switch>
                <Route exact path="/">
                  <ToDo />
                </Route>
                <Route exact path="/setting">
                  <Setting />
                </Route>
              </Switch>
            </Else>
          </If>
        </BrowserRouter>
      </ListContext>
    </>
  );
}
