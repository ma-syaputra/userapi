'use strict';
const _= require('lodash')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');
const moment = require('moment')
const userSchema = require('./../helpers/schema/definitionUsers.js').definitionUser
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/userapp',{useNewUrlParser: true});
var mdbUser = mongoose.model('Users',userSchema)



function registration(req, res) {
  
  console.log(req.body)
  const user = _.pick(req.body,['username','password','email'])
  const addUser = new mdbUser(user)
  try {
    addUser.save();
  } catch (e) {
  console.log('sssssss')
  }


  // const user = _.pick(req.body,['username','password','email'])
  // const saltRounds = parseInt(process.env.SALT)
  // bcrypt.hash(user.password, saltRounds, function(err, hash) {
  //   res.status(200).send({status: 200,
  //     item : hash });
  //   console.log(new Date())
  // });
}




module.exports = {
  registration: registration
};

