const Joi = require('@hapi/joi');
const express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    bcrypt = require('bcrypt'),
    saltRounds = 10,
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    app = express();
require('dotenv').config();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
}));


app.use(session({
    key: 'user',
    secret: 'subscriber',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 360 * 360 * 360,
    },

}));


const db = mysql.createConnection(
    {
        user: 'root',
        password: 'root',
        host: 'localhost',
        database: 'metbix'
    }
);


app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    const image = req.body.image;

    bcrypt.hash(password, saltRounds, (err, hash) => {

        db.query('INSERT INTO users (user_name , user_mail , user_password , user_image ,admin_id) values(?,?,?,?,?)', [username, mail, hash, image ,1]);

    });

});


app.get('/login', (request, response) => {


    if (request.session.user) {

        response.send({loggedIn: true , user:request.session.user})

    } else {

        response.send({loggedIn: false})


    }


})




app.post('/logout' , (request , response) => {

    request.session.destroy();

})



app.post('/usemail' , (request , response) => {

    const mail = request.body.mail

    db.query('select * from users where user_mail = ?;',[mail] , (err , result) => {

        if (result.length > 0){

            response.send({exist : true})

        }else {

            response.send({exist : false})

        }

    });

})


app.post('/login', (request, response) => {

    const email = request.body.mail
    const password = request.body.password
    db.query('select * from users where user_mail = ?;', [email],
        (err, result) => {

            if (err) {

                response.send({err: err});

            }

            if (result.length > 0) {

                bcrypt.compare(password, result[0].user_password, (hashErr, hashRes) => {

                    if (hashRes) {

                        request.session.user = result;

                        response.send(result)


                    } else {

                        response.send({message: "E-post address or Password is false!"})

                    }


                });


            } else {


                response.send({message: "User doesn't exist!"})
            }

        });

});

const port = process.env.PORT || 4000;


app.listen(port, ()=> {(console.log("Salam Aleykum"))});





