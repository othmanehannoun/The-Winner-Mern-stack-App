const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question : {
        type : String,
        require : true,
        minlenght : 4,
        maxlength : 450
    },
    categoryParent:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categorey'
    },

    answers: [
        {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                },
            
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: false
            },
            
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                
            },
            
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                
            }
        }
    ]

}



,{
    timestaps : true
});



module.exports = mongoose.model('question', questionSchema);