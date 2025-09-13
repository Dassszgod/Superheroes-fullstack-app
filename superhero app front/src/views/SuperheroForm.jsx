import React, { useEffect, useState } from "react";
import "./styles/SuperheroForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuperheroForm () {

    const navigate = useNavigate();
    const[nickname, setNickname] = useState('');
    const[real_name, setReal_name] = useState('');
    const[origin_description, setOrigin_description] = useState('');
    const[superpowers, setSuperpowers] = useState('');
    const[catch_phrase, setCatch_phrase] = useState('');
    const[image, setImage] = useState('');

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
        const response = await axios.post(
            'http://localhost:5001/api/superhero',
            data,
            {
            headers: {
                'Content-Type': 'application/json',
            },
            }
        );
        console.log('Post created:', response.data);
        } catch (error) {
        console.error('Error creating post:', error);
        }
        navigate('/');
    };

    return (
        <div className="app">
            <form className="formCont" onSubmit={handleSubmit}>
                <h1>Add superhero</h1>
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
                <button className='sBut' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default SuperheroForm;