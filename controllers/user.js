const {readDb, writeDb} = require('../helpers/helpers');

module.exports = {

    getUsers: async (req, res) => {
        res.json(await readDb());
    },

    getUserById: async (req, res) => {
        const {userId} = req.params;
        const users = await readDb();
        const user = users.find(user => userId === user.id.toString());

        res.json(user);
    },

    createUser: async (req, res) => {
        const newUser = req.body;
        const users = await readDb();

        users.push({...newUser, id: users.length + 1});

        await writeDb(users);

        res.json(users);
    },

    updateUser: (req, res) => {
        res.json('UPDATE USER');
    },

    deleteUser: async (req, res) => {
        const {userId} = req.params;
        const users = await readDb();

        const user = users.filter(user => {
            return user.id.toString() !== userId
        });

        await writeDb(user);

        res.json(user);
    }
};