const {authValidator} = require('../validators/login.validator');
const User = require('../dataBase/User');
const {BAD_REQUEST_NOT_FOUND} = require('../errors/index');

module.exports = {
    isLoginAndPasswordValid: (req, res, next) => {
        try {
            const {error, value} = authValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    },
    userAuthMiddleware: async (req, res, next) => {
        try {
            const {login} = req.body;
            const findUserByLogin = await User.findOne({login}).select('+password');

            if (!findUserByLogin) {
                throw new Error(BAD_REQUEST_NOT_FOUND.message, BAD_REQUEST_NOT_FOUND.code);
            }

            req.user = findUserByLogin;
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
