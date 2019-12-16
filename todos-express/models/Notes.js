const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    _id : {
        type : Number,
        required : false
    },
    name : {
        type : String,
        required : false
    },
    create : {
        type : String,
        required : false
    },
    changed : {
        type : String,
        required : false
    },
    items : {
        type : Array,
        required : false
    },
    isExist : {
        type: Boolean,
        required : false
    }
})

module.exports = mongoose.model('Notes',NotesSchema)