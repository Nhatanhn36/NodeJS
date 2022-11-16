var express = require('express');
var router = express.Router();

var database = require('../config/database');

router.get('/', function(req, res) {
    //list user
    database.query('SELECT * FROM user', function(err, result) {
        if(err)
            console.log(err);

        res.render('users/list', {
            title: 'User List',
            data: result
        });
    });

});

router.get('/add', function(req, res) {
    res.render('users/add', {
        title: 'Add New User',
        name: '',
        age: '',
        email: ''
    })
});

router.post('/add', function(req, res) {
    var user = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }

    database.query('INSERT INTO user SET ?', user, function(err, result) {
        if(err) {
            console.log(err);
        }  else {

            //req.flash('success', 'Data added successfully!')

            res.render('users/add', {
                title: 'Add New User',
                name: '',
                age: '',
                email: ''
            });
        }
    })
});

router.get('/edit/(:id)', function (req,res){
    //get user info from your DB
    var user = {
        name: '',
        age: '',
        email: ''
    }
    database.query('SELECT * FROM user WHERE id = ?', + req.params.id, user, function (err, result){
        res.render('users/edit', {
            title: 'Update User',
            data: result[0]
        })
    })
})

// router.post('/edit/(:id)')

module.exports = router;

