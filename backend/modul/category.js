const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title : {
        type : String,
        require : true,
        minlenght : 4,
        maxlength : 150
    },
    body : {
        type : String,
        require : true,
        minlenght: 4,
        maxlength: 2000,
    },
    // img : {
    //     type : String,
    //     require : true
    // }

},{
    timestaps : true
});


module.exports = mongoose.model('category', categorySchema);