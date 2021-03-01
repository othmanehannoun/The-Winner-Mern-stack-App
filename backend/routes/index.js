var express = require('express');
const Category = require('../modul/category');
const Question = require('../modul/question');
var router = express.Router();



router.get('/', function(req, res, next) {

  res.send('api working')
  
});

// --------Find Category ----------//
router.get('/category',(req,res)=>{
  Category.find((err, categorys) =>{
    if (err || !categorys){
      return res.json({error: 'No data'})
    }
    res.json({categorys})
  })
  
})
// -------ADD Category---------//
router.post('/addcategory', (req, res) =>{
  const category = new Category({
    title : req.body.title,
    body : req.body.body,
    // img : req.body.img
  })
  category.save()
  .then(doc=>{res.send(doc)})
  .catch(err=>{console.log(err)})
})


// --------- UPDATE NOTE ----------//
// router.put('/updateNote/:id', (req, res) =>{
//  Note.findById(req.params.id).then(note =>{
//    note.title = req.body.title;
//    note.body = req.body.body;

//    note.save()
//    .then( ()=>{res.json('data updated')})
//    .catch(err =>{ console.log(err)})
//  }).catch (err =>{console.log(err)})
 
// })


// ---------- DELETE Category -----------//
router.delete('/deletecategory/:id', (req,res)=>{
  Category.findByIdAndDelete(req.params.id).then(category=>{
    res.json('note deleted')
  }).catch(err=>{
    console.log(err);
  })
})

// ---------- find Category BY ID -----------//
router.get('/category/:id', (req,res)=>{
  Category.findById(req.params.id).then(category=>{
    res.json({category})
  }).catch(err=>{
    console.log(err);
  })
})

// ------ADD Question ------ //
router.post('/addquestion/:id', (req, res) =>{
  const question = new Question({
    question : req.body.question,
    categoryParent : req.body.categoryParent
  })
  question.save()
  .then(doc=>{res.send(doc)})
  .catch(err=>{console.log(err)})
})

// ---------- find question by id -----------//
router.get('/question/:id', (req,res)=>{
  Question.find({categoryParent : req.params.id}).then(question=>{
    res.json({question})
  }).catch(err=>{
    console.log(err);
  })
})

// ---------- DELETE Category -----------//
router.delete('/deleteQuestion/:id', (req,res)=>{
  Question.findByIdAndDelete(req.params.id).then(question=>{
    res.json('note deleted')
  }).catch(err=>{
    console.log(err);
  })
})





module.exports = router;
