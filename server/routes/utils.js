//删除操作
exports.delete = (model,id,res)=>{
    model.deleteOne({_id:id},(err)=>{
        if (err) {
            console.log(err);
            res.send({ code: 1, message: "操作失败！" });
        } else {
            res.send({code:0,message:"操作成功！"});
        }
    })
}
//更新操作
exports.update = (model,body,res,router)=>{
    model.updateOne({_id:body.id},body,(err)=>{
        if (err) {
            console.log(err);
            res.send({ code: 1, message: "操作失败！" });
        } else {
            res.redirect(router);
        }
    })
}
//新增操作
exports.new = (model,body,res,router)=>{
    let newdoc = new model(body);
    newdoc.save((err)=>{
        if (err) {
            console.log(err);
            res.send({ code: 1, message: "操作失败！" });
        } else {
            res.redirect(router);
        }
    })
}
exports.Format = function(date,fmt) 
{ 
  var o = { 
    "M+" : date.getMonth()+1,                 //月份 
    "d+" : date.getDate(),                    //日 
    "h+" : date.getHours(),                   //小时 
    "m+" : date.getMinutes(),                 //分 
    "s+" : date.getSeconds(),                 //秒 
    "q+" : Math.floor((date.getMonth()+3)/3), //季度 
    "S"  : date.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}