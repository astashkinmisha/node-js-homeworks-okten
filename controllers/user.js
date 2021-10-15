const User = require('../dataBase/index');
const {hash} = require('../service/index');
const {userNormalizator} = require('../util/index');


module.exports = {

    getUsers: async (req, res, next) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const user = req.user;

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const hashPassword = await hash(req.body.password);
            console.log(hashPassword);
            const newUser = await User.create({...req.body, password: hashPassword});
            const normalizedUser = userNormalizator(newUser.toJSON());

            res.json(normalizedUser);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const {userId} = req.params;

            await User.findByIdAndUpdate(userId, req.body);

            res.json(`User with ${userId} was updated!`);
        } catch (e) {
           next(e);
        }

    },

    deleteUser: async (req, res, next) => {
        try {
            const {userId} = req.params;
            await User.findByIdAndDelete(userId);

            res.json(`User with id: ${userId}, was deleted`);
        } catch (e) {
            next(e);
        }
    },
};
