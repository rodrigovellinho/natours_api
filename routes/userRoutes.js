const express = require('express');
const {
  createUsers,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require('./../controllers/userController');
const { signUp, login } = require('../controllers/authenticationController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
