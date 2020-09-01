const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");


// Load input validation
const validateRegisterInput = require("../../validation/register");

const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");


// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
 
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);

    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });



  router.post("/profile", (req, res) => {
 
 //   db.theColl.find( { "_id": ObjectId("4ecbe7f9e8c1c9092c000027") } )

    const id=req.body.id;
   console.log(req.body.user);
    console.log(req.body);

    User.find({ "_id":id }).then(user => {
        if (user) {
          console.log(user)
        return res.json(user);
      } else {
        return res
          .status(400)
          .json({ notFound: "user not found" });
      }
    });
  });


  router.post("/editProfile",(req,res)=>{
    console.log("user Data",req.body);
    console.log(req.body.Surname);

    const id= req.body.id;
    User.findOneAndUpdate({"_id":id},
         {$set:{ Surname:req.body.Surname,
          name:req.body.name,
          NickName:req.body.NickName, 
          DOB:req.body.DOB,
          Phone:req.body.Phone,
          About:req.body.About,
          Avatar:req.body.Avatar
        }},{new:true},(err,userProfile)=>{
          if (err) {
            console.log("Something wrong when updating data!"+ err);
        }
    
        console.log("success"+userProfile);
        return res.json(userProfile);
        })
  });



  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    console.log("running")

  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            text:user.text
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });


  module.exports= router;