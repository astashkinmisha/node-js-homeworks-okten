const bcrypt = require('bcrypt');

const ErrorHandler = require('../errors/index');

const saltRounds = 10;

module.exports = {
    hash: (password) => bcrypt.hash(password, saltRounds),
    compare: async (password, hashPassword) => {
        const isMatch = await bcrypt.compare(password, hashPassword);

        if (!isMatch) {
            throw new ErrorHandler('error', 400);
        }
    }
};
