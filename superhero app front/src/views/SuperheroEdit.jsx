import React, { useEffect, useState } from "react";
import "./styles/SuperheroForm.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SuperheroEdit () {
    const {id} = useParams();
    
    const navigate = useNavigate();

    const[nickname, setNickname] = useState('');
    const[real_name, setReal_name] = useState('');
    const[origin_description, setOrigin_description] = useState('');
    const[superpowers, setSuperpowers] = useState('');
    const[catch_phrase, setCatch_phrase] = useState('');
    const[image, setImage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5001/api/superhero/${id}`)
        .then(response => {
            const hero = response.data.data; 
            setNickname(hero.nickname);
            setReal_name(hero.real_name);
            setOrigin_description(hero.origin_description);
            setSuperpowers(hero.superpowers);
            setCatch_phrase(hero.catch_phrase);
            setImage(hero.image);
        })
        .catch(error => console.error("Error fetching hero:", error));
    }, [id]);

    const handleSubmit = async (event) => {

        event.preventDefault(); 

        const data = {
        "nickname": nickname,
        "real_name": real_name,
        "origin_description": origin_description,
        "superpowers": superpowers,
        "catch_phrase": catch_phrase,
        "image": image
        };

        try {
        const response = await axios.put(
            `http://localhost:5001/api/superhero/${id}`,
            data,
            {
            headers: {
                'Content-Type': 'application/json',
            },
            }
        );
        console.log('Updated:', response.data);
        } catch (error) {
        console.error('Error updating:', error);
        }
        navigate('/');
    };

    return (
        <div className="app">
            <form className="formCont" onSubmit={handleSubmit}>
                <h1>Edit superhero</h1>
                <p>Nickname</p>
                <input className='input' type='text' value={nickname} 
                onChange={(e) => setNickname(e.target.value)} required/>
                <p>Real name</p>
                <input className='input' type='text' value={real_name} 
                onChange={(e) => setReal_name(e.target.value)} required/>
                <p>Origin description</p>
                <input className='input' type='text' value={origin_description} 
                onChange={(e) => setOrigin_description(e.target.value)} required/>
                <p>Superpowers</p>
                <input className='input' type='text' value={superpowers} 
                onChange={(e) => setSuperpowers(e.target.value)} required/>
                <p>Catch phrase</p>
                <input className='input' type='text' value={catch_phrase} 
                onChange={(e) => setCatch_phrase(e.target.value)} required/>
                <p>Image url</p>
                <input className='input' type='text' value={image} 
                onChange={(e) => setImage(e.target.value)} required/>
                <button className='sBut' type='submit'>Edit</button>
            </form>
        </div>
    )
}

export default SuperheroEdit;