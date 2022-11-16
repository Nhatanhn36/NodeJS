const express = require('express')
const app = express();
const port = 3000

const bodyParser = require('body-parser');
const users = [
    {
        userName : "Nguyen Nhat Anh",
        userEmail : "nhatanhn36@gmail.com",
        userAge : 19,
        userUniqueID : '1' 
    },
    {
        userName : "Nguyen Hoai Nam",
        userEmail : "hoaiNam@gmail.com",
        userAge : 20,
        userUniqueID : '2'
    },
    {
        userName : "Do Hoang Anh",
        userEmail : "AnhHoang@gmail.com",
        userAge : 19,
        userUniqueID : '3'
    }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}))

app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.render('home', {

    })
})

app.get('/user', (req, res) => {
    res.render('user', {
        data: users
    })
})

app.post('/', (req, res) =>{
    const inputUserUniqueID = req.body.userUniqueID
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge

    users.push({
        userUniqueID: inputUserUniqueID,
        userName: inputUserName,
        userEmail: inputUserEmail,
        userAge: inputUserAge
    })

    res.render('user', {
        data : users
    })
})

app.post('/update', (req, res) => {
    const inputUserUniqueID = req.body.userUniqueID
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge
    var j = 0;

    users.forEach(user => {
        j = j + 1;
        if (user.userUniqueID === inputUserUniqueID) {
            user.userName = inputUserName
            user.userEmail = inputUserEmail
            user.userAge = inputUserAge
        }
    })
    res.render('user', {
        data : users
    })
})

app.post('/delete', (req, res) => {
    var requestedUserUniqueID = req.body.userUniqueID;
    var j = 0;
    users.forEach(user => {
        j = j + 1;
        if(user.userUniqueID === requestedUserUniqueID) {
            users.splice((j - 1), 1)
        }
    })
    res.render('user', {
        data : users
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})