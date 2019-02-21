$('.form-control').hide();
$('.tolk .btn-primary').hide();
$('.tolk .btn-info').hide();
$('.table tr:not(:last) .btn-primary').hide();
$('.table .btn-info').hide();
$('.save').hide();
//修改表格某行数据
$('.table .btn-success').click(function(){
    $(this).parents('tr').find('.form-control').removeAttr('disabled');
    $(this).parents('tr').find('.form-control').show();
    $(this).hide();
    $(this).siblings('.btn').show();
    $(this).siblings('.btn-danger').hide();
    $(this).parents('tr').find('p').hide();
})

//修改我的简介
$('.tolk .btn-success').click(function(){
    $(this).siblings('p').hide();
    $(this).hide();
    $(this).siblings('textarea').show();
    $(this).siblings('.btn').show();

})
$('.tolk .btn-info').click(function(){
    $(this).siblings('p').show();
    $(this).hide();
    $(this).siblings('textarea').hide();
    $(this).siblings('.btn-success').show();
    $(this).siblings('.btn-primary').hide();
})


//保存表格某行修改的数据
$('.table tr:not(:last) .btn-primary').click(function(){
    $(this).hide();
    $(this).siblings('.btn-success,.btn-danger').show();
    $(this).siblings('.btn-info').hide();
    $(this).parents('tr').find('.form-control').hide();
    $(this).parents('tr').find('p').show();

    var obj={
        id:$(this).parents('tr').attr('data-id'),
        name:$(this).parents('tr').find('.form-control')[0].value,
        data:Number($(this).parents('tr').find('.form-control')[1].value)
    }
    ajax({
        type:"post",
        url:"/myInfo/skillsUpdate",
        data:obj,
        success:function(data){
            if(data.code!==0){
                alert("操作成功！");
                window.location.reload();
            }else{
                alert("操作失败，请检查！");
                if($(this).parents('tr').find('.form-control')){
                    $(this).parents('tr').find('.form-control').attr('disabled',"");
                }     
            }
        }
    })
   
})
$('.table tr:not(:last) .btn-Info').click(function(){
    $(this).hide();
    $(this).siblings('.btn').show();
    $(this).siblings('.btn-primary').hide();
    $(this).parents('tr').find('.form-control').hide();
    $(this).parents('tr').find('p').show();
    $(this).parents('tr').find('.form-control').attr('disabled',"");
})
//删除表格数据
$('.btn-danger:not(:first)').click(function(){
    var msg=confirm("确定删除这条数据吗？");
    if(msg){
        var id = $(this).parents("tr").attr("data-id");
        ajax({
            type:"delete",
            url:"/myInfo/skillsDelete/"+id
        })
    }
})

//新增表格数据
$('.new').click(function(){
    $(this).parents('tr').find('.form-control').show();
    $(this).hide();
    $(this).siblings('.btn').show();
})
//保存新增数据
$('.save').click(function(){
    $(this).parents('tr').find('.form-control').hide();
    $(this).hide();
    $(this).siblings('.new').show();
    $(this).siblings('.info').hide();
    var obj = {
        name:$(this).parents('tr').find('.form-control')[0].value,
        data:Number($(this).parents('tr').find('.form-control')[1].value)
    }
    ajax({
        type:'POST',
        url:"/myInfo/new",
        data:obj,
        success:function(data){
            if(data.code!=0){
                alert("操作成功！");
                window.location.reload();
            }else{
                alert("操作失败，请检查！");
                $(this).parents('tr').find('.form-control').attr('disabled',"");
            }
        }
    })
})
$('.info').click(function(){
    $(this).parents('tr').find('.form-control').hide();
    $(this).hide();
    $(this).siblings('.new').show();
    $(this).siblings('.save').hide();
})

//保存我的简介
$('.tolk .btn-primary').click(function(){
    var context = $(this).siblings('textarea').val().replace(/\n/g,"<br/>");
    var obj = {
        id:$(this).siblings('textarea').attr("data-id"),
        words:context,

    }
    $(this).siblings('p').show();
    $(this).hide();
    $(this).siblings('textarea').hide();
    $(this).siblings('.btn-info').hide();
    $(this).siblings('.btn-success').show();
    ajax({
        type:"post",
        url:"/myInfo/simpleUpdate",
        data:obj
    })
})


