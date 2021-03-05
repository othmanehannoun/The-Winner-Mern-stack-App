var express = require('express');
const jwt = require('jsonwebtoken');

// lood user model
var User = require('../modul/user');


const register = (req, res) =>{
  const status = 2;
  const {name, phone, email, password, joined} = req.body;
  User.findOne({email}).then(user=>{
    if(user){
      return res.status(404).json({email: "Email already exists"})
    }
    else{
      const newUser = new User({
        name, phone, email, password, status, joined
      }); 
      newUser.save()
      .then(user => {res.json({user})})
      .catch(err => {console.log(err)})

    }
  });
}

const login = async(req, res, next) =>{
  const {email, password} = req.body;

  try{
      const user = await User.findOne({email})
      if(!user){
        const err = new Error(`the email ${email} was not found on our system`);
        err.status = 401;
        next(err);
      }

      user.isPasswordMatch(password, user.password, (err, matched)=>{
        if(matched){
          const secret = process.env.JWT_SECRET;
          const expire = process.env.JWT_EXPRITION;

          const token = jwt.sign({_id:user._id}, secret, {expiresIn: expire});
          return res.send({token});
        }
        res.status(401).send({
          error: 'Invalid email/password combination'
        });
      });
  }catch(e){
       next(e)
  }

}


const ChoiceCategory = (req, res) =>{
     res.send('Choise category')
}



  module.exports = {
    register, login, ChoiceCategory
  } 