const express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err) => {
    console.log(err)
});
db.once('open', () => {
    console.log('connect mongo database');
});

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('login');
});

// 生活小记
var lifeArticle = require("./routes/lifeArticle");
app.use("/lifeArticles",lifeArticle);

// 关于我
var myInfo = require('./routes/myInfo');
app.use('/myInfo',myInfo);

//照片墙
var cover = require("./routes/cover");
app.use("/covers",cover);

//留言墙
var comment = require('./routes/comment');
app.use("/leaveMessage",comment)

//给前端页面的接口
var interface = require('./routes/interface');
app.use("/",interface);

var studyShares = require("./routes/studyShare");
app.use("/studyShare",studyShares);
app.listen(4000);