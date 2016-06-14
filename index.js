//Saved environment wicked awesome stuff

require('dotenv').config();

//Initialize Express
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
require('./server/config/database');
require('./server/config/passport');
require('./server/models/info.js');
require('./server/models/skills.js');
var User = require('./server/models/user.js');

app.set('port', (process.env.PORT || 8500));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
require('./server/config/passport');
var routes = require('./server/routes/index');

app.use('/api', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});