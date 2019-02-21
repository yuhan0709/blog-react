var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var photosSchame = new Schema({
    url:{
        type:String,
        required:true
    },
    folder:{
        type:String,
        required:true
    }
})
let Photo = module.exports = mongoose.model('Photo',photosSchame);