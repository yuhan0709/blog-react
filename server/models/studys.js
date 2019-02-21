var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    body:{
        type:String,
        required:true,
    },
    atype:{
        type:String,
        default:'随笔'
    },
    description:{
        type:String,
        required:true,
    },
    cover:{
        type:String,
        required:false
    }

})
let Study = module.exports = mongoose.model('Article',studySchema);