const User = require('../dataBase/User');

module.exports = {
    userAuthMiddleware: async (req, res, next) => {
        try {
            const checkUserByLoginAndEmail = await User.findOne({email: req.body.email, login: req.body.login});
            if (checkUserByLoginAndEmail) {
                throw new Error('required login or email is incorrect');
            }
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
