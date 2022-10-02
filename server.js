var express = require("express");
var app = express();
const email = require('./modules/email');

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));

// render index page
app.get('/', (req, res) => {
    res.render('index')
})

// post request for sending an email
app.post('/', (req, res) => {
    let emailInfo = req.body;
    email.sendMail(emailInfo.email, emailInfo.subject, emailInfo.message);
    res.redirect('/')
})
