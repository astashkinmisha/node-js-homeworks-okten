const router = require('express').Router();

const userController = require('../controllers/user');
const {searchByIdMiddleware} = require('../middleswares/user.findById.middleware');
const {createUserMiddleware} = require('../middleswares/user.create.middleware');

router.get('/', userController.getUsers);
router.post('/', createUserMiddleware, userController.createUser);

router.put('/:userId', searchByIdMiddleware, userController.updateUser);
router.get('/:userId', searchByIdMiddleware, userController.getUserById);
router.delete('/:userId', searchByIdMiddleware, userController.deleteUser);

module.exports = router;
