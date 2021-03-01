const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
require('dotenv').config();




// ---------connection database--------//
  const url = 'mongodb+srv://devH:devh2020@newcluster.bdh3e.mongodb.net/mernStack?retryWrites=true&w=majority';

    mongoose.connect(url,{ useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false, 
         useCreateIndex: true})
         .then(console.log('database connected!'))
         .catch(err=>{
          console.log(err);
        })


const PORT = process.env.PORT || 4000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// const { initialize } = require('passport');


var app = express();



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport')(passport)

app.use('/', indexRouter);
app.use('/users', usersRouter);


// error handler
app.listen(PORT,() =>{
  console.log('server Connected!!!!!!')
})

module.exports = app;
