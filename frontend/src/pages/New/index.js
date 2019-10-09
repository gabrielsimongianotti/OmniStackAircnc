import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import api from "../../services/api.js";


export default function New({ history }) {
    const [thumbnail, setThumbail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])


    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spot', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbail(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>
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