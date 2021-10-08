const User = require('../dataBase/User');

module.exports = {
    userAuthMiddleware: async (req, res, next) => {
        try {
            const {login, email} = req.body
            const findUserByLoginAndEmail = await User.findOne({email, login});

            if (!findUserByLoginAndEmail) {
                throw new Error(`User with such ${email} and login: ${login}, not found!`);
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
