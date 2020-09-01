const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  text:{
    type :String,
    default:"your Text"
  },

  Surname   :  {type :String},
  NickName  :  {type:String},
  DOB       :  {type:String},
  Phone     :  { type:String},
  About     :  {type:String},
  Avatar    :  {type :String}

});

module.exports = User = mongoose.model("users", UserSchema);