var mongoose = require('mongoose');

var dbURI = process.env.MONGOlab_URI;
if (process.env.NODE_ENV === 'production'){
  dbURI = process.env.MONGODB_URI;
}


mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected!');
});


require('../models/info');
require('../models/skills');
