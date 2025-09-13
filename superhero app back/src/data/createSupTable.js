import pool from "../config/db.js";

const createSupTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS superheroes (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(100) UNIQUE NOT NULL,
    real_name VARCHAR(100) NOT NULL,
    origin_description VARCHAR(700) NOT NULL,
    superpowers VARCHAR(200) NOT NULL, 
    catch_phrase VARCHAR(200) NOT NULL,
    image VARCHAR(300) NOT NULL
    )
    `;

    try {
        pool.query(queryText);
        console.log("User table created if not exists");
    }catch(err) {
        console.log("Err creating users table : ", err);
    }
};

export default createSupTable;