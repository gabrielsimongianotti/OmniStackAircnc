import React from 'react';
import './App.css';
import Routes from './routes.js';

import logo from "./assets/logo.svg";

function App() {

  return (
    <div className="container">
      <img src={logo} />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
