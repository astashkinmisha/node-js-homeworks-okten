let express = require('express');
const userRouter = require('./routes/user');

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.listen(5000, () => {
    console.log(`App listen 5000`);
})