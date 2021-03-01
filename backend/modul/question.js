const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question : {
        type : String,
        require : true,
        minlenght : 4,
        maxlength : 450
    },
    categoryParent:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'categorey'
    }

},{
    timestaps : true
});



module.exports = mongoose.model('question', questionSchema);