import React, { useState } from 'react';
import api from "../../services/api.js";

export default function Login({ history }) {
    const [email, setEmail] = useState('');


    async function hanbleSubmit(event) {
        event.preventDefault();
        const response = await api.post('/sessions', { email })

        const { _id } = response.data;
        // console.log(response);
        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }
    return (
        <>
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
        </>
    );
}