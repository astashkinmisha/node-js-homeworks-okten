const User = require('../dataBase/User');

module.exports = {

    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    getUserById: (req, res) => {
        try {
            const user = req.user;

            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            res.json(newUser);
        } catch (e) {
            res.json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const {userId} = req.params;

            await User.findByIdAndUpdate(userId, req.body);

            res.json(`User with ${userId} was updated!`)
        } catch (e) {
            res.json(e.message);
        }

    },

    deleteUser: async (req, res) => {
        try {
            const {userId} = req.params;
            await User.findByIdAndDelete(userId);

            res.json(`User with id: ${userId}, was deleted`);
        } catch (e) {
            res.json(e.message);
        }
    },
};
