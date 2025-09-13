import React, { useEffect, useState } from "react";
import "./styles/SuperheroList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuperheroList() {
    const navigate = useNavigate();
    const [supList, setSupList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const heroesPerPage = 5;

    useEffect(() => {
        axios.get("http://localhost:5001/api/superhero")
            .then(response => {
                setSupList(response.data.data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = supList.slice(indexOfFirstHero, indexOfLastHero);

    const totalPages = Math.ceil(supList.length / heroesPerPage);

    return (
        <div className="app">
            <div className="supTxt">Superheroes list</div>

            <div className="cardsCont">
                {currentHeroes.length > 0 ? (
                    currentHeroes.map(sup => (
                        <div key={sup.id} className="card" onClick={() => navigate(`/details/${sup.id}`)}>
                            <img className="img" src={sup.image} alt={sup.nickname}/>
                                <h3>{sup.nickname}</h3>
                                <p>{sup.real_name}</p>
                        </div>
                    ))
                ) : (
                    <h1>loading..</h1>
                )}
            </div>

            <div className="pagination">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </button>

                <span className="pagTxt">{currentPage} / {totalPages}</span>

                <button 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>

            <button className="crBut" onClick={() => navigate('/create')}>Create</button>
        </div>
    );
}

export default SuperheroList;
