const User = require('../dataBase/User');

module.exports = {
    searchByIdMiddleware: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const foundUser = await User.findById(userId);


            if (!foundUser) {
                throw new Error(`User with ID: ${userId}, not found!`);
            }

            req.user = foundUser;
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};