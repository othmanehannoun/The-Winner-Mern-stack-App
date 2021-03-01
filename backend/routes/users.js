var express = require('express');
const jwt = require('jsonwebtoken');
const { authenticate } = require('passport');
const passport = require('passport');
var router = express.Router();
// lood user model
var User = require('../modul/user');





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello world');
});

// Register new user
router.post('/register', (req, res) =>{
  const {name, email, password, joined} = req.body;
  User.findOne({email}).then(user=>{
    if(user){
      return res.status(404).json({email: "Email already exists"})
    }
    else{
      const newUser = new User({
        name, email, password, joined
      }); 
      newUser.save()
      .then(user => {res.json({user})})
      .catch(err => {console.log(err)})

    }
  });

});

// Login
router.post('/login', async(req, res, next) =>{
  const {email, password} = req.body;

  try{
      const user = await User.findOne({email: email})
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

})

// router.get('/test', passport.authenticate('jwt', {session: false}),(req, res, next)=>{
//    return res.send({message: 'hiiiiii'})
// })


module.exports = router;
