var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var skillSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    data:{
        type:Number,
        required:true
    }
}) 
let Skill = module.exports = mongoose.model('Skill',skillSchema);