var express = require("express");
let router = express.Router();
var bodyParser = require("body-parser");
var urlendedParser = bodyParser.urlencoded({ extended: false });
let Skill = require('../models/skills');
let SimpleInfo = require('../models/simpleInfo');
var utils = require('./utils.js');
//关于我
//获取
router.get("/", (req, res) => {
    Skill.find({}, function (err, skills) {
        if (err) {
            console.log(err);
        } else {
            SimpleInfo.find({}, function (err, info) {
                var words = info[0].words.replace(/<[^>]+>/g,'\n');
                var obj = {
                    words:words,
                    _id:info[0]._id,
                    value:info[0].words
                }
                if (err) {
                    console.log(err);
                } else {
                    res.render('myInfo/index.ejs', { skills: skills, info:obj});
                }
            })
        }
    })
})

//更新技能
router.post('/skillsUpdate', urlendedParser, (req, res) => {
    var body = null || req.body;
    utils.update(Skill,body,res,"/myInfo");
})

//新增
router.post("/new", urlendedParser, (req, res) => {
    var body = null || req.body;
    utils.new(Skill,body,res,"/myInfo");
})
//删除
router.delete("/skillsDelete/:id", (req, res) => {
    var id = req.params.id;
    utils.delete(Skill,id,res);
})

//简介更新
router.post("/simpleUpdate",urlendedParser,(req,res)=>{
    var body = null || req.body;
    utils.update(SimpleInfo,body,res,"/myInfo");
})

module.exports = router;