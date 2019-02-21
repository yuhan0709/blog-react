var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    mail:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true
    }
})
let comment = module.exports = mongoose.model('Comment',commentSchema);