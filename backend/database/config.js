const mongoose = require('mongoose');
require('dotenv').config();

// ---------connection database--------//
const url = 'mongodb+srv://devH:devh2020@newcluster.bdh3e.mongodb.net/mernStack?retryWrites=true&w=majority';

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false, 
     useCreateIndex: true})
     .then(console.log('database connected!'))
     .catch(err=>{
      console.log(err);
    })

    module.exports = mongoose;