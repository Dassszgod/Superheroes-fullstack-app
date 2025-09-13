import pool from "../config/db.js";

export const getAllSupsService = async () => {
    const result = await pool.query("SELECT * FROM superheroes");
    return result.rows;
};

export const getSupByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM superheroes WHERE id = $1", [id]);
    return result.rows[0];
};

export const createSupService = async (nickname, real_name, origin_description, superpowers, catch_phrase, image) => {
    const result = await pool.query
    ("INSERT INTO superheroes (nickname, real_name, origin_description, superpowers, catch_phrase, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [nickname, real_name, origin_description, superpowers, catch_phrase, image]);
    return result.rows[0];
};

export const updateSupService = async (id, nickname, real_name, origin_description, superpowers, catch_phrase, image) => {
    const result = await pool.query
    ("UPDATE superheroes SET nickname=$1, real_name=$2, origin_description=$3, superpowers=$4, catch_phrase=$5, image=$6 WHERE id=$7 RETURNING *",
        [nickname, real_name, origin_description, superpowers, catch_phrase, image, id]);
    return result.rows[0];
};

export const deleteSupService = async (id) => {
    const result = await pool.query("DELETE FROM superheroes WHERE id=$1 RETURNING *", 
        [id]
    );
    return result.rows[0];
};