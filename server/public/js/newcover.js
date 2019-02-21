$(".img").change(function(){
    $(this).siblings('img').attr("src",$(this).val());
})