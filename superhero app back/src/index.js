import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import supRoutes from "./routes/supRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createSupTable from "./data/createSupTable.js";

dotenv.config();

const app = express(); 
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ 
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api", supRoutes);

app.use(errorHandling);

createSupTable();

app.get("/", async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is ${result.rows[0].current_database}`);  
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})