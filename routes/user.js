const router = require('express').Router();

const userController = require('../controllers/user');
const {userAuthMiddleware} = require("../middleswares/user.login.middleware");

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);

router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUser);
router.post('/login', userAuthMiddleware, userController.loginUser);

module.exports = router;
