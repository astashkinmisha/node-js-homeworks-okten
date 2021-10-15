const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const {user, login} = require('./routes/index');
// const userRouter = require('./routes/user');
// const loginRouter = require('./routes/login');
const {PORT, MONGO_URL} = require('./configs/index');

const app = express();

mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', user);
app.use('/login', login);
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            msg: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
