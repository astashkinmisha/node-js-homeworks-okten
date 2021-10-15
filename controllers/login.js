const {compare} = require('../service/password.service');
module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const {login, password} = req.body;
            const userDetails = req.user;
            await compare(password, userDetails.password);

            res.json(`Successful ${login}, congratulations!`);
        } catch (e) {
            next(e);
        }
    }
};
