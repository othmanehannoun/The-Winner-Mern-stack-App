var express = require('express');
var router = express.Router();

const {register, login, ChoiceCategory} = require('../controller/controller_uses')




router.post('/register', register);
router.post('/login', login);
router.post('/choiseCategory', ChoiceCategory)



module.exports = router;
