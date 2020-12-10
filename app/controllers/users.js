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
    getUsersById : getUsersById,
    deleteUserById: deleteUserById,
    updateUser: updateUser,
    responseToJSON : responseToJSON
};

function getUsers(req, res, next) {

    // const filter = {};
    // if(req.query.isActive){
    //     filter.isActive = req.query.isActive;
    // }

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

    const addUser = req.body;

    addUser.details = {
        age: req.body.age,
        role: req.body.role
    }

    addUser.documents = JSON.parse(addUser.documents);

    const user = new User(req.body);

    user.save(function(err, result){
        if(err){
            console.log('err', err)
            const err = createErrorUsers()
            err.statusCode = 400;
            return next(err)
        }
        req.resources.users = result;
        return next();
    })
}

function getUsersById(req, res, next){
    console.log(req.params.userId);
    console.log();
    
    User.find({_id: req.params.userId}, function(err, result){
        if(err){
            return res.json(err)
        }
        req.resources.users = result;
        return next();
    })
}

function deleteUserById(req, res, next){
    User.deleteOne({_id: '5fcf3aa2c640c42f28275d88'}, function(err, result){
        if(err){
            return res.json(err)
        }
        req.resources.users = result;
        return next();
    })
}

function updateUser(req,res,next){
    User.update({_id: req.params.userId}, function(err,result){
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