const router = require('express').Router();

const {isLoginAndPasswordValid, userAuthMiddleware} = require('../middleswares/index');
const loginController = require('../controllers/login');

router.post('/',
    isLoginAndPasswordValid,
    userAuthMiddleware,
    loginController.loginUser);

module.exports = router;
