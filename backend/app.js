const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('./database/config');
const logger = require('./database/logger.js')
const app = express();

//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);


// error handler
app.use((req,res,next)=>{
  res.status(404).send('Sorry Dont find this route');
  
});

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
  logger.info(`Server listen this Port ${PORT}`);
  logger.error('sommting wrong')
});

module.exports = app
