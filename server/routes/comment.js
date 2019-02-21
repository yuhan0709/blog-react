var express = require("express");
var router = express.Router();
var Comment = require('../models/comments');
router.get("/",(req,res)=>{
    Comment.find({},function(err,comments){
        if(err){
            console.log(err);
        }else{
            res.render('leaveMessage/index.ejs',{comments:comments});
        }
    })
    
})
router.delete("/deleteMessage/:id",(req,res)=>{
    var id = req.params.id;
    Comment.remove({_id:id}, (err) => {
        if (err) {
            console.log(err);
            res.send({ code: 1, message: "操作失败！" });
        } else {
            res.send({code:0,message:"操作成功"})
        }
    })
})
module.exports = router;