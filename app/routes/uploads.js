'use strict'
const express = require('express');
const initExpress  = require('../../config/express.js');
const router = express.Router();
const userController = require('../controllers/users.js')
const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let pathPrefix = path.resolve(__dirname, '../files');
        console.log("file:", file)
        cb(null, pathPrefix)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
var upload = multer({ storage: storage })


router.post('/uploads',
    upload.single('avatar'),
    function(res,req,next){
        console.log(req.file);
    
    return res.json({upload: true});
}
);

module.exports = router;