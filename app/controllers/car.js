const isAdmin = false;
const car = require('../models/car');
const Car = require('../models/car');
// const { delete } = require('../routes/car');

module.exports = {
    createCar: createCar,
    getCar: getCar,
    deleteCar: deleteCar,
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

function deleteCar(req, res, next){
    // const car = new Car(req.body);
    // console.log(req.body._id);
    car.deleteOne({_id: req.body._id}, function(err, result){
        req.resources.car = result;
        return next();
    })
}
// function getUsersById(req, res, next){
//     User.find({_id: '5fcf3aa2c640c42f28275d88'}, function(err, result){
//         if(err){
//             return res.json(err)
//         }
//         req.resources.users = result;
//         return next();
//     })
// }
function responseToJSON(prop){
    console.log("CAR", prop);
    return function(req, res, next) {
        // console.log(res);

        return res.json(req.resources[prop]);
    }
}