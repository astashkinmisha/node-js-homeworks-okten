const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const {PORT, MONGO_URL} = require('./configs/config');

const app = express();

mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

