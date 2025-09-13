import { createSupService, deleteSupService, getAllSupsService, getSupByIdService, updateSupService } from "../models/supModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createSup = async (req, res, next) => {
    const {nickname, real_name, origin_description, superpowers, catch_phrase, image} = req.body;
    try {
        const newSup = await createSupService(nickname, real_name, origin_description, superpowers, catch_phrase, image);
        handleResponse(res, 201, "Superhero created successfully", newSup);
    } catch(err) {
        next(err);
    }
};

export const getAllSups = async (req, res, next) => {
    try {
        const sups = await getAllSupsService();
        handleResponse(res, 200, "Superheroes fetched successfully", sups);
    } catch(err) {
        next(err);
    }
};

export const getSupById = async (req, res, next) => {
    try {
        const sup = await getSupByIdService(req.params.id);
        if (!sup) return handleResponse(res, 404, "Superhero not found");
        handleResponse(res, 200, "Superhero fetched successfully", sup);
    } catch(err) {
        next(err);
    }
};

export const updateSup = async (req, res, next) => {
    const {nickname, real_name, origin_description, superpowers, catch_phrase, image} = req.body;
    try {
        const updatedSup = await updateSupService(req.params.id, nickname, real_name, origin_description, superpowers, catch_phrase, image);
        if (!updatedSup) return handleResponse(res, 404, "Superhero not found");
        handleResponse(res, 200, "Superhero updated successfully", updatedSup);
    } catch(err) {
        next(err);
    }
};

export const deleteSup = async (req, res, next) => {
    try {
        const deletedSup = await deleteSupService(req.params.id);
        if (!deletedSup) return handleResponse(res, 404, "Superhero not found");
        handleResponse(res, 200, "Superhero deleted successfully", deletedSup);
    } catch(err) {
        next(err);
    }
};