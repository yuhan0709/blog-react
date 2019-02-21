var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var simpleInfoSchame = new Schema({
    words:{
        type:String,
        required:true
    }
})
let simpleInfo= module.exports = mongoose.model('SimpleInfo',simpleInfoSchame);