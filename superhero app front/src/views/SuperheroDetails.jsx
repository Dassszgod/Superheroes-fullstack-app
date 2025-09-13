import "./styles/SuperheroDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SuperheroDetails () {
    const navigate = useNavigate();

    const {id} = useParams();
    const[supInfo, setSupInfo] = useState('');

    useEffect(() => {
    axios.get(`http://localhost:5001/api/superhero/${id}`)
        .then(response => {
            setSupInfo(response.data.data);
        })
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    const deleteSup =  async (event) => {   

        const confirmDelete = window.confirm("Are you sure you want to delete this hero?");
        if (!confirmDelete) {
            return;
        }

        try {
        const response = await axios.delete(`http://localhost:5001/api/superhero/${id}`);
        console.log('Deleted:', response.data);
        } catch (error) {
        console.error('Error deleting:', error);
        }
        navigate('/');
    }

    return (
        <div className="app">
            <div className="supCont">
                <img className="supImg" src={`${supInfo.image}`}/>
                <div className="supInfo">
                    <h1>{supInfo.nickname}</h1>
                    <p><b>Real name</b>: {supInfo.real_name}</p>
                    <p><b>Origin description</b>: {supInfo.origin_description}</p>
                    <p><b>Superpowers</b>: {supInfo.superpowers}</p>
                    <p><b>Catch phrase</b>: "{supInfo.catch_phrase}"</p>
                    <div className="butCont">
                        <button className="editBut" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
                        <button className="deleteBut" onClick={deleteSup}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperheroDetails;