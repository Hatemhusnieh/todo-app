import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import AuthContext from './context/auth';
import App from './app.js';

function Main() {
  return (
    <AuthContext>
      <App />
    </AuthContext>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
