import React, { useState } from 'react';
import './App.css';
import logo from "./assets/logo.svg";
import api from "./services/api.js";

function App() {
  const [email, setEmail] = useState('');


  async function hanbleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email })

    console.log(response);
  }
  return (
    <div className="container">
      <img src={logo} />
      <div className="content">
        <p>
          Ofereça <strong>para programadores e encontre talentos para sua empresa</strong>
        </p>
        <form onSubmit={hanbleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)} />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
