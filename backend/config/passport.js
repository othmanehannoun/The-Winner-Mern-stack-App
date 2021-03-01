// const jwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require('../modul/user');
// require('dotenv').config();

// module.exports = (passport) => {
//     let config = {}
//     config.secretOrkey = process.env.JWT_SECRET;
//     config.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

//     passport.use(new jwtStrategy(config, async(jwtPaylood, done) =>{

//         try{
//             const user = await User.findById(jwtPaylood._id);
//             if(user){
//                 return done(null, user);
//             }
//         }
//         catch(e){
//             return done(err, false)
//         }
//     }))
// }

