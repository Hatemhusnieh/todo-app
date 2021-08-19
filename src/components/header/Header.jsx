import React, { useContext } from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { ListContext } from '../../context/list';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import './header.scss';

function Header() {
  const { loggedIn, logout } = useContext(AuthContext);
  const listContext = useContext(ListContext);
  const { incomplete } = listContext;

  return (
    <>
      <Navbar className="bp3-navbar bp3-dark">
        <Navbar.Group>
          <Navbar.Heading>To Do List: {incomplete} items pending</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Link to="/">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Link>
          {loggedIn && (
            <>
              <Link to="setting">
                <Button className="bp3-minimal" icon="build" text="Setting" />
              </Link>
              <Link to="/">
                <Button className="bp3-minimal" icon="log-out" onClick={() => logout()} text="log out" />
              </Link>
            </>
          )}
        </Navbar.Group>
      </Navbar>
    </>
  );
}

export default Header;
