const User = require('../dataBase/User');

module.exports = {

    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    }
    ,

    getUserById: async (req, res) => {
        try {
            const {userId} = req.params;
            const user = await User.findById(userId);

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

    updateUser: (req, res) => {
        res.json('UPDATE USER');
    },

    deleteUser: async (req, res) => {
        try {
            const {userId} = req.params;
            await User.findByIdAndDelete({userId});
            res.json(`User with id: ${userId}, was deleted`);
        } catch (e) {
            res.json(e.message);
        }
    },

    loginUser: (req, res) => {
        try {
            const {login} = req.body;
            res.json(`Successful ${login}, congratulations!`);
        } catch (e){
            res.json(e.message);
        }
    }
};
