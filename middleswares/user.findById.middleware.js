const User = require('../dataBase/User');
const {NOT_FOUND_BY_ID} = require('../errors/index');

module.exports = {
    searchByIdMiddleware: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const foundUser = await User.findById(userId);


            if (!foundUser) {
                throw new Error(NOT_FOUND_BY_ID.message, NOT_FOUND_BY_ID.code);
            }

            req.user = foundUser;
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
