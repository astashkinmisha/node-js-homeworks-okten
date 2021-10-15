const {getUsers} = require("../controllers");
const router = require('express').Router();

// const userController = require('../controllers/index');
// const {searchByIdMiddleware} = require('../middleswares/index');
// const {isUserBodyValid} = require('../middleswares/index');
// const {updatedUserMiddleware} = require('../middleswares/index');

router.get('/', getUsers);
router.post('/', isUserBodyValid, userController.createUser);

router.put('/:userId', updatedUserMiddleware, searchByIdMiddleware, userController.updateUser);
router.get('/:userId', searchByIdMiddleware, userController.getUserById);
router.delete('/:userId', searchByIdMiddleware, userController.deleteUser);

module.exports = router;
