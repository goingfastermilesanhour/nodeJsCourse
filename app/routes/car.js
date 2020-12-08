'use strict'

const express = require('express');
const initExpress  = require('../../config/express.js');
const router = express.Router();
const userController = require('../controllers/car.js');
const { isUserAdmin } = require('../controllers/users.js');

router.post('/car',
    userController.createCar,
    userController.responseToJSON('car')
);

router.get('/car',
    userController.getCar,
    userController.responseToJSON('car')
);

router.delete('/car',
    userController.deleteCar,
    userController.responseToJSON('car')
);


module.exports = router;