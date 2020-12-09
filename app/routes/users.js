'use strict'
const express = require('express');
const initExpress  = require('../../config/express.js');
const router = express.Router();
const userController = require('../controllers/users.js')


router.get('/users', 
    userController.getUsers,  
    userController.responseToJSON('users'),
);

router.get('/users/:userId',
    userController.getUsersById,
    userController.responseToJSON('users')
);    

router.post('/users',
    userController.getUsers,
    userController.createUser,
    userController.responseToJSON('addUsers')
);

router.delete('/delete',
userController.deleteUserById,
userController.responseToJSON('users')
);

module.exports = router;