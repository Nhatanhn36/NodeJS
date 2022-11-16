const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicationUsernameOrEmail = (req, res, next) => {
    //User
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Username already in use!"
            });
            return;
        }

        //Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "Email already on use!"
                });
                return;
            }
            next();
        });
    });
};

checkRolesIfExisted = (req, res, next) => {
    if(req.body.roles) {
        for (let i=0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};