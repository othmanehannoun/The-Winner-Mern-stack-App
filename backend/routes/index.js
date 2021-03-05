var express = require('express');
var router = express.Router();

const {category, addCategory, DeleteCategory, getCategoryById, 
        AddQuestion, getQustionById, DeletQuestion} = 
        require('../controller/controller_admin');



// --------Find Category ----------//
router.get('/category', category)
// -------ADD Category---------//
router.post('/addcategory', addCategory)
// ---------- DELETE Category -----------//
router.delete('/deletecategory/:id', DeleteCategory)
// ---------- find Category BY ID -----------//
router.get('/category/:id', getCategoryById)

// ------ADD Question ------ //
router.post('/addquestion/:id', AddQuestion)
// ---------- find question by id -----------//
router.get('/question/:id', getQustionById)
// ---------- DELETE Category -----------//
router.delete('/deleteQuestion/:id', DeletQuestion)






module.exports = router;
