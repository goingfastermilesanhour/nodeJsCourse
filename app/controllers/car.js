const isAdmin = false;
const car = require('../models/car');
const Car = require('../models/car');

module.exports = {
    createCar: createCar,
    getCar: getCar,
    responseToJSON : responseToJSON
};

function createCar(req, res, next){
    const car = new Car(req.body);

    car.save(function(err, result){
        req.resources.car = result;
        return next();
    })
}

function getCar(req, res, next){
    Car.find(function(err, result){
        if(err){
            return res.json(err)
        }     
        console.log(result);
        req.resources.car = result;
        return next();
    }
    )
}

function responseToJSON(prop){
    console.log("CAR", prop);
    return function(req, res, next) {
        // console.log(res);

        return res.json(req.resources[prop]);
    }
}