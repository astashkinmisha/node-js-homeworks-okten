const userValidator = require('../validators/user.validator');
const ErrorHandler = require('../errors/error.handler');
const {FORBIDDEN_USER_NOT_CONFIRMED} = require("../errors/custom.errors");


module.exports ={
    isUserBodyValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, FORBIDDEN_USER_NOT_CONFIRMED.code );
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    }
};
