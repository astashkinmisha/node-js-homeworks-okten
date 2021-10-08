const User = require('../dataBase/User');

// module.exports = {
//     createUserMiddleware: async (res, req, next) => {
//         try {
//             const {email} = req.body;
//             const foundEmail = await User.find({email});
//
//             if (!foundEmail) {
//                 throw new Error(`User with this ${email} already exists!`);
//             }
//
//             next();
//         } catch (e) {
//             res.json(e.message);
//
//         }
//     }
// };

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