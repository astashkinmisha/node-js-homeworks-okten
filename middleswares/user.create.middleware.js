const User = require('../dataBase/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const {email} = req.body;
            const foundUser = await User.find({email});

            if (foundUser) {
                throw new Error(`User with this email: ${email} already exists!`);
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};