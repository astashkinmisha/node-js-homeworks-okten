const router = require('express').Router();

const userController = require('../controllers/user')

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);

router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUser);

module.exports = router;