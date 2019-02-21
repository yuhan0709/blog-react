function editItem(id){
    window.location.href="/lifeArticles/edit/"+id;
}
$('.btn-primary').click(()=>{
    window.location.href="/lifeArticles/new";
})
function deleteItem(id){
   ajax({
       url:"lifeArticles/delete/"+id,
       type:"delete"
   })
}