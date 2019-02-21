let express = require("express");
let router = express.Router();
var bodyParser = require("body-parser");
var urlendedParser = bodyParser.urlencoded({ extended: false });
var json = bodyParser.json();
let Skill = require('../models/skills');
let Comment = require("../models/comments");
let SimpleInfo = require('../models/simpleInfo');
let Covre = require("../models/covers");
let Study = require("../models/studys");
let Life = require("../models/articles");
router.get("/skills",(req,res)=>{
    var obj={
        yAxis:[],
        xAxis:[]
    }
    Skill.find({},function(err,skills){
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            skills.forEach((item)=>{
                obj.xAxis.push(item.data);
                obj.yAxis.push(item.name);
            })
            res.send({
                code:1,
                obj:obj
            });
        }
        
    })
})

router.get("/simpleInfo",(req,res)=>{
    SimpleInfo.find({},function(err,info){
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            res.send({
                code:1,
                data:info[0].words
            });
        }
    })
})
router.get("/comment",(req,res)=>{
    Comment.find({},function(err,data){
        var obj=[];
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
           data.forEach((item)=>{
                var mail = item.mail;
                var index = mail.indexOf("@");
                console.log(index);
                if(index>6){
                    var replaceString = item.mail.substr(3,3);
                    item.mail = mail.replace(replaceString,"***");    
                }else{
                    var replaceString = item.mail.substr(1,index-2);
                    item.mail = mail.replace(replaceString,(new Array(index-1).join("*")));
                }
                console.log(replaceString);
   
            })
            console.log(data);
            res.send({
                code:1,
                obj:data
            });
        }
    })
})
router.get("/cover",(req,res)=>{
    Covre.find({private:false},function(err,data){
        if(err){
            console.log(err);
            res.end({code:0})
        }else{
            res.send({code:1,data:data});
        }
    })
})
router.post("/comment",json,(req,res)=>{
    var comment = new Comment(req.body);
    comment.save((err)=>{
        if(err){
            console.log(err);
            res.send({code:"0"});
        }else{
            res.send({code:"1"});
        }
    })
})
router.get("/study",(req,res)=>{
    Study.find({},(err,data)=>{
        if(err){
            console.log(err);
            res.send({code:0})
        }else{
            res.send({code:1,data:data});
        }
    })
})
router.get("/study/:id",(req,res)=>{
    var id = req.params.id;
    Study.find({_id:id},(err,data)=>{
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            res.send({code:1,data:data[0]});
        }
    })
})

router.get("/life",(req,res)=>{
    Life.find({},(err,data)=>{
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            res.send({code:1,data:data});
        }
    })
})

router.get("/life/:id",(req,res)=>{
    var id = req.params.id;
    Life.find({_id:id},(err,data)=>{
        if(err){
            console.log(err);
            res.send({code:0});
        }else{
            res.send({code:1,data:data[0]});
        }
    })
})
module.exports = router;

