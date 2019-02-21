$('.btn-danger').click(function(){
    var id = $(this).parents('.caption').attr("data-id");
    ajax({
        url:"/covers/deleteCover/"+id,
        type:"delete",
    })
})