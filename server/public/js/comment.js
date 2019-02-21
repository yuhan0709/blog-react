$('.btn-danger').click(function(){
    var msg=confirm("确定删除这条数据吗？");
    if(msg){
        var id = $(this).parents('.list-group').attr("data-id");
        ajax({
            type:"delete",
            url:"/leaveMessage/deleteMessage/"+id
        })
    }
})