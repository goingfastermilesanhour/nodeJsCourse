const bodyParser = require('body-parser');
// const { hidePoweredBy } = require('helmet');
// const helmet = require("helmet");
module.exports = {
    initExpress: initExpress
};

function initExpress(app){
        // app.use(helmet());
    // app.use(hidePoweredBy());
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(bodyParser.text())
    app.use(function(req, res, next){
        req.resources = req.resources || {};
        next();
    })

    // app.use(function(req, res, next)) {

    // }
}