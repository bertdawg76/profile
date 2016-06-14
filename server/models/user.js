var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = require('../config/main');
//var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {type: String, lowercase: true, unique: true },
  password: {type: String, required: true },
  role: {type: String, default: 'user', enum: ['user', 'admin', 'manager'] },
  name: String
});

//hash the password before we save it in the database

UserSchema.pre('save', function(next){
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
  return next();
  }
});

// compare password in the database and the one that the user types in

/*UserSchema.methods.comparePassword = function(password, cb){
  bcrypt.compare(password, this.password, function(err, isMatch){
    if (err){
      return cb(err);
    }
    cb(null, isMatch);
  });
};*/
UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
};


UserSchema.methods.generateJwt = function(){
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    role: this.role,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  },  'ILoveDonuts');
};

module.exports = mongoose.model('User', UserSchema);
