import React, { useState } from 'react';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company"> EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa incrivel"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs"> TECNOLOGIAS * <samp>(separadas por virgula)</samp></label>
            <input
                id="techs"
                placeholder=" Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price"> VALOR DA DIÁRIA * <samp>(em branco para GRATUITO)</samp></label>
            <input
                id="price"
                placeholder=" Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    );
}