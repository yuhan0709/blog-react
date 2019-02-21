var express = require("express");
var router = express.Router();
var utils = require("./utils");
var bodyParser = require("body-parser");
var Cover = require("../models/covers");
var urlendedParser = bodyParser.urlencoded({ extended: false });
router.get("/",(req,res)=>{
    Cover.find({},(err,data)=>{
        res.render("photoWall",{data:data});
    })
})

router.delete("/deleteCover/:id",(req,res)=>{
    var id = req.params.id;
    utils.delete(Cover,id,res);
})

router.get("/changeCover",urlendedParser,(req,res)=>{
    var data = req.body;
    console.log(data);
    res.send("234");
})
router.get("/newCover",(req,res)=>{
    res.render("photoWall/newcovers.ejs");
})
router.get("/editCover/:id",(req,res)=>{
    Cover.find({_id:req.params.id},(err,data)=>{
        console.log(data[0]);
        res.render("photoWall/editcovers",{data:data[0]});
    })
})
router.post("/newCover",urlendedParser,(req,res)=>{
   var obj = req.body;
   if(obj.private){
       obj.private=true
   }else{
       obj.private=false
   }
   utils.new(Cover,obj,res,"/covers");  
})
router.post("/editCover/:id",urlendedParser,(req,res)=>{
    var obj = req.body;
    obj.id = req.params.id;
    if(obj.private){
        obj.private=true
    }else{
        obj.private=false
    }
    utils.update(Cover,obj,res,"/covers");
})
module.exports = router;