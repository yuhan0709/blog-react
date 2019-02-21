function editItem(id){
    window.location.href="/studyShare/edit/"+id;
}
$('.btn-primary').click(()=>{
    window.location.href="/studyShare/new";
})
function deleteItem(id){
   ajax({
       url:"studyShare/delete/"+id,
       type:"delete"
   })
}