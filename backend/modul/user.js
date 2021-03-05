const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phone: {
        type: String,
        require : true
    },
    email:{
        type : String,
        require : true 
    },
    password: {
        type : String,
        require : true
    },
    status: {
        type : Number,
        require : true
    },
    joined : {
        type : Date,
        default: new Date(),
    }

});

// hash password before saving in database
    UserSchema.pre('save', async function(next){
     if(!this.isModified('password')){
         return next();
     }
     try{
         const salt = await bcrypt.genSalt(10);
         const hash = await bcrypt.hash(this.password, salt);
         this.password = hash;
         next();
         
     }catch(e){
         return next(e)
     }
});

UserSchema.methods.isPasswordMatch = function(password, hash, collback){
    bcrypt.compare(password, hash, (err, success)=>{
        if(err){
            return collback(err);
        }
        collback(null, success); 
    })
}

module.exports = mongoose.model('user', UserSchema);