const router = require('express').Router();

const userController = require('../controllers/user');
const {userAuthMiddleware} = require('../middleswares/user.login.middleware');
const {searchByIdMiddleware} = require('../middleswares/user.findById.middleware');
const {createUserMiddleware} = require('../middleswares/user.create.middleware');


router.get('/', userController.getUsers);
router.post('/', createUserMiddleware, userController.createUser);

router.put('/:userId', searchByIdMiddleware, userController.updateUser);
router.get('/:userId', searchByIdMiddleware, userController.getUserById);
router.delete('/:userId', searchByIdMiddleware, userController.deleteUser);
router.post('/login', userAuthMiddleware, userController.loginUser);

module.exports = router;
