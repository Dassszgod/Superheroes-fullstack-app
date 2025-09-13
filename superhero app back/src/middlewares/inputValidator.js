import Joi from "joi";

const supScheme = Joi.object ({
    nickname: Joi.string().min(3).required(),
    real_name: Joi.string().min(6).required(),
    origin_description: Joi.string().min(10).required(),
    superpowers: Joi.string().min(5).required(),
    catch_phrase: Joi.string().min(5).required(),
    image: Joi.string().uri().required(),
});

const validateSup = (req, res, next) => {
    const {error} = supScheme.validate(req.body);
    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next();
};

export default validateSup;