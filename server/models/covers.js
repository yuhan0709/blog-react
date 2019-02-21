var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coverSchema = new Schema({
    //封面图片
    url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    private:{
        type:Boolean,
        required:false,
        default:false
    }
})      
let Cover = module.exports = mongoose.model('Cover',coverSchema); 