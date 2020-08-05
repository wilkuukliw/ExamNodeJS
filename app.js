const express = require("express");
const app = express();
const helmet = require('helmet');
const escape = require('escape-html');
app.use(express.static('public'))
app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(helmet()); 
const session = require('express-session');  

app.use(session({
    secret: require('./config/mysqlCred.js').sessionSecret,  
    resave: false,  
    saveUninitialized: true
}));

app.get("/", (req,res) => {
    return res.sendFile(__dirname + "/public/index/index.html")
});

app.get("/chat", (req,res) => {
    return res.sendFile(__dirname + "/public/chat/chat.html")
});

app.get("/breeds", (req,res) => {
    return res.sendFile(__dirname + "/public/breeds/breeds-api.html")
});

app.get("/about", (req,res) =>{
    return res.sendFile(__dirname + "/public/about.html")
});

/* knex and objection */

const { Model } = require('objection');  // used to create an extra abstraction layer to make objects with. built on an SQL query builder - knex
const Knex = require('knex');     // with capital cause this is a library
const knexFile = require('./knexfile.js');

const knex = Knex(knexFile.development);    // and this is a connection from the knexfile - in lower case

Model.knex(knex);  // build in method - objects now are aware of the connection 

/* sockets */ 

const server = require('http').createServer(app);   // creating an HTTP server yourself, instead of having Express create one for you is useful if you want to reuse the HTTP server, for example to run socket.io within the same HTTP server instance

const io = require('socket.io')(server);  // pass server to io library

io.on('connection', socket => {    //initialize connection, this callback contains info about specific client

   socket.on("Listen to the client!", ({ talk }) => {
       
         io.emit("User said", { talk: escape(talk) });  // sends out to all the clients

        }); 
});


// setup route with our server instance
const applicationRoute = require('./routes/application.js');    
app.use(applicationRoute);   // REST for the application model

const doggoRoute = require('./routes/doggo.js');    
app.use(doggoRoute);   // REST for the application model

const usersRoute = require('./routes/users.js');
app.use(usersRoute); // REST for the user model /transferring  representations of a resource(user json object) to transfer its state from server/lives there/ to client

const authRoute = require('./routes/auth.js');   
app.use(authRoute);


var port = process.env.NODE_ENV == 'development' ? 3000 : 80;
app.listen(port);
    console.log("Server is running remotely")


const credentials = require("./config/mysqlCred");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: credentials.host,
    database: credentials.database,
    user:     credentials.user,
    password: credentials.password,
    port: '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to AWS RDS database.');
});

connection.end();