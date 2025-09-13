import express from "express";
import { createSup, deleteSup, getAllSups, getSupById, updateSup } from "../controllers/supController.js";
import validateSup from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/superhero", validateSup, createSup);
router.get("/superhero", getAllSups);
router.get("/superhero/:id", getSupById);
router.put("/superhero/:id", validateSup, updateSup);
router.delete("/superhero/:id", deleteSup);

export default router;