const isAdmin = false;
const User = require('../models/users');

function isUserAdmin(req, res, next){
    if(isAdmin) {
        return next();
    }else{
        return res.send('Unauthorized access');
    }
}

module.exports = {
    isUserAdmin: isUserAdmin,
    createUser: createUser,
    getUsers: getUsers,
    // getUsersById : getUsersById,
    deleteUserById: deleteUserById,
    responseToJSON : responseToJSON
};

function getUsers(req, res, next) {
    User.find(function(err, result){
        if(err){
            return res.json(err)
        }     
        req.resources.users = result;
        return next();
    }
    )
  }

function createUser(req, res, next){
    const user = new User(req.body);

    user.save(function(err, result){
        req.resources.users = result;
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

function deleteUserById(req, res, next){
    User.deleteOne({_id: '5fcf3aa2c640c42f28275d88'}, function(err, result){
        if(err){
            return res.json(err)
        }
        req.resources.users = result;
        return next();
    })
}

function responseToJSON(prop){
    // console.log("saf");
    return function(req, res, next) {
        // console.log(res);
        return res.json(req.resources[prop]);
    }
}