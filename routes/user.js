const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
// const filterData = require('../middleware/filterData');

router.post('/signup', userCtrl.singup);
router.post('/login', userCtrl.login);

router.get('/users',  userCtrl.getAllUsers);
router.get('/users/:id',  userCtrl.getOneUser);

module.exports = router;