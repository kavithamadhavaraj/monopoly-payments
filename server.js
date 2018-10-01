// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').load();
const app = express();
const db_URI = process.env.MONGODB_URI;

var mongoose = require('mongoose');
mongoose.connect(db_URI, { useNewUrlParser: true }).then((res) => {
  console.log("DB connected successfully");
},(err) =>{
  console.log("DB connection error");
});    

var profile_router = require('./rest_services/profile');

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4201);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'))
app.use('^/api/profile/', profile_router);
// If an incoming request uses a protocol other than HTTPS, redirect that request to the same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app to use the forceSSL middleware
//app.use(forceSSL());

// /api/* Matches
app.get( '^/api/:params*', function( req, res, next ) {
    res.send( "Matches an /api/ route." );
});


// For all GET requests except for internal API's (starts with /api/), send back index.html so that PathLocationStrategy can be used
app.get( /^((?!\/api\/).)*$/, function( req, res, next ) {
   res.sendFile(path.join(__dirname + '/dist/index.html'));
});


