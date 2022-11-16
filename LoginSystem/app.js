const express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret : 'webslesson',
    resave : true,
    saveUninitialized : true
}));
app.use('/', indexRouter);
app.use('/users', userRouter);

app.use(cookieParser());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
