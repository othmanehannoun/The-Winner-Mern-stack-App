var express = require('express');
const Category = require('../modul/category');
const Question = require('../modul/question');



// GET CATEGORY
const category = (req,res)=>{
    Category.find((err, categorys) =>{
      if (err || !categorys){
        return res.json({error: 'No data'})
      }
      res.json({categorys})
    })
    
  }

  // ADD CATEGORY
  const addCategory = (req, res) =>{
    const category = new Category({
      title : req.body.title,
      body : req.body.body,
      // img : req.body.img
    })
    category.save()
    .then(doc=>{res.send(doc)})
    .catch(err=>{console.log(err)})
  }

  // DELET CATEGORY  //
  const DeleteCategory = (req,res)=>{
    Category.findByIdAndDelete(req.params.id).then(category=>{
      res.json('category deleted')
    }).catch(err=>{
      console.log(err);
    })
  }

// Find Category BY ID //
const getCategoryById =  (req,res)=>{
    Category.findById(req.params.id).then(category=>{
      res.json({category})
    }).catch(err=>{
      console.log(err);
    })
  }

  // Add Question  //
  const AddQuestion = (req, res) =>{
    const question = new Question(req.body)
    question.save()
    .then(doc=>{res.send(doc)})
    .catch(err=>{console.log(err)})
  }

  // Find Question By Id  //
  const getQustionById = (req,res)=>{
    Question.find({categoryParent : req.params.id})
    .then(question=>{
      res.json({question})
    }).catch(err=>{
      console.log(err);
    })
  }

  // Delete Question
  const DeletQuestion = (req,res)=>{
    Question.findByIdAndDelete(req.params.id).then(question=>{
      res.json('note deleted')
    }).catch(err=>{
      console.log(err);
    })
  }



  module.exports = {
      category, addCategory, DeleteCategory, getCategoryById,
      AddQuestion, getQustionById, DeletQuestion
  }
