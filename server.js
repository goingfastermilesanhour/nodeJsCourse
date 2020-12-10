'use strict'
const express =  require('express');
const helper = require('./helper.js');
const app = express(); //apelam expressul dupa instalat
const config = require('./config/index.js');
console.log(config);
const routeConfig = require('./config/routes');

require('./config/mongoose').initMongoose();
require('./config/express').initExpress(app);
require('./config/routes').initRoutes(app);

app.all('*', function(req, res, next){
    console.log('final router does not exist');
    // return res.json({test:1});
    return res.status(404).json({
        status: 'fail',
        message: `not found ${req.url} on server` })
}   
)

const helperCtrl = require('./helper.js');

app.use(function(err, req, res, next){
    return res.status(err && err.statusCode || 400).json({
        status: 'error',
        message: err & err.message || 'Default message'
    })
});

app.listen(config.PORT, function(){
    console.log(`API on port ${config.PORT}`);

}); //primeste doi parametri, port pe care ruleaza appu si callback

// app.use('/users', function(req, res, next){
//     console.log('midd1');
//     req.test='node.js';
//     next();
// });
// app.use('/courses', function(req, res, next){
//     console.log('courses');
//     req.courses='node.js';
//     next();
// });
// app.use('/users', function(req, res, next){
//     req.test='javascript';
//     req.timestamp=helperCtrl.getDate();
//     next();
// });

// app.get('/users', function(req,res,next){
//     console.log(req.test);
//     return res.json({age:1, name:'lala', test: req.test, timestamp: req.timestamp})
// });
// app.get('/courses', function(req,res,next){
//     console.log(req.test);
//     return res.json({age:1, name:'lala', test: req.test, timestamp: req.timestamp})
// });

