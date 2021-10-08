const User = require('../dataBase/User');

module.exports = {
    searchByIdMiddleware: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const foundUser = await User.findById(userId);
            req.user = foundUser;

            if (!foundUser) {
                throw new Error(`User with ID: ${userId}, not found!`);
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};