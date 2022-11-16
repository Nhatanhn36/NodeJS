var express = require('express');
var router = express.Router();

var database = require('../config/database');

router.get('/', function (req, res) {
    res.render('index', { title: 'Express', session : req.session });
});

router.get('/logout', function(request, response){
    request.session.destroy();
    response.redirect("/");
});

router.post('/login', function(req, response) {
    //connect to DB
    //Execute login
    //
    var user_email_address =  req.body.user_email_address;
    var user_password = req.body.user_password;

    var query = `
        SELECT * FROM user_login 
        WHERE user_email = "${user_email_address}"
        `;

    database.query(query, function(error, data){

        if(data.length > 0)
        {
            for(var count = 0; count < data.length; count++)
            {
                if(data[count].user_password == user_password)
                {
                    req.session.user_id = data[count].user_id;

                    response.redirect("/");
                }
                else
                {
                    response.send('Incorrect Password');
                }
            }
        }
        else
        {
            response.send('Incorrect Email Address');
        }
        response.end();
    });

});

module.exports = router;
