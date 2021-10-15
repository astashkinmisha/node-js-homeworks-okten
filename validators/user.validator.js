const Joi = require('joi');

const { EMAIL_REGEXP, PASSWORD_REGEXP } = require('../configs/index');
const userRoles = require('../configs/index');

const createUserValidator = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim()
        .required(),
    email: Joi
        .string()
        .regex(EMAIL_REGEXP)
        .trim()
        .required(),
    role: Joi.string().allow(...Object.values(userRoles)),
    password: Joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required(),
    login: Joi
        .string()
        .required()
        .min(3)
        .max(32)
});

const updateUserValidator = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim(),
    email: Joi
        .string()
        .regex(EMAIL_REGEXP)
        .trim(),
});

module.exports = {
    createUserValidator, updateUserValidator
};
