var obj = {
    success: function (data) {
        if (data.code) {
            alert("操作失败");
        } else {
            alert("操作成功！");
            window.location.reload();
        }
    },
    error: function (err) {
        console.log(err);
        alert("操作失败，请检查")
    }
}
var ajax = function (options) {
    var result = $.extend({},obj,options);
    $.ajax(result)
}