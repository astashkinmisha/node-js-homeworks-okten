const router = require('express').Router();

const {userAuthMiddleware} = require("../middleswares/user.login.middleware");
const loginController = require('../controllers/login');


router.post('/login', userAuthMiddleware, loginController.loginUser);

module.exports = router;