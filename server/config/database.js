var mongoose = require('mongoose');

var dbURI = config.dbURI;


mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected!');
});


require('../models/info');
