# ajax
##XMLHttpRequest对象
```
var xhr = new XMLHttpRequest();//不兼容IE6及其以下。

request = new ActiveObject('Microsoft.XMLHttp'); //ie6
```
## HTTP请求
1. HTTP请求的方法或动作，比如GET还是POST请求
2. 正在请求的URL，即请求的地址
3. 请求头，包含一些客户端环境信息，身份验证信息等
4. 请求体，也就是请求正文

### GET和POST
- GET:用于信息获取，使用url传递参数。一般用来查询，不用新建和修改，信息对任何人都是可见的。发送的信息数量也有限制，一般在2000个字符左右
- POST：相对安全，修改服务器上的资源，向服务器发送一些信息，从表单发送一些数据，对其他人不可见。所有的名称和值都会被嵌入HTTP的请求体中，发送信息部的数量没有限制。

### HTTP响应
1. 一个数字和文字组成的状态码，用来显示请求是成功过还是失败。
2. 响应头
3. 响应体

### HTTP状态码：
- 1XX：信息类，表示收到web浏览器请求，正在进一步处理中。
- 2XX：成功，表示用户请求正在被接收，理解和处理。
- 3XX：重定向，表示请求没有成功，客户必须采用进一步的动作。
- 4XX:客户端错误，表示客户端提交的请求有错误
- 5XX:服务器错误，服务器不能完成对请求的处理。

## XMLHttpRequest发送请求
- open(method,url,async)
1.     method，发送请求的方法，GET,POST;
2.     url，请求的地址
3.     async，请求是同步还是异步，true or false;
- send(string) 请求发送到服务器
1.     GET方法，可以不填写参数
2.     POST方法，要填写参数

## XMLHttpRequest取得响应
- responseText:获得字符串形式的响应数据
- responseXML:获得XML形式的响应数据
- status和statusText:以数字和文本形式返回HTTP状态码
- getAllResponseHeader():获取所有响应报头
- getResponseHeader():查询响应中的某个字段的值。

### readyState属性
- 0：还未初始化，open还未调用
- 1：服务器已经建立，open已经调用
- 2：请求已接收，也就是接收到头信息了
- 3：请求处理中，也就是接收到响应主体了
- 4：请求已完成，且响应已就绪，也就是响应完成了。

```
var request = new XMLHttpRequest();
request.open('GET','get.php'true);
request.send();
request.onreadystatechange = function(){   //在每一次readyState属性变化时触发，监听readyState
    if(request.readyState===4&&request.status===200){
        //做一些事。
    }
}
```
## JSON:JavaScript对象表示法。
### JSON解析
- eval()  (不严谨)
```
var jsonobj = eval('('+jsondata+')'); 
```
- JSON.parse()
```
var jsonobj = JSON.parse(jsondata)
```

## jquery中的Ajax
### jquert中ajax的设定值
- type:类型POST或GET，默认为GET
- url:发送请求的地址
- data:一个对象，连同请求发送到服务器的数据
- dataType:预期服务器返回的数据类型
- success:一个方法，请求成功后的回调函数，以及包含成功代码的字符串
- error：一个方法，请求失败时调用此函数。传入XMLHttp对象

```
$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"",
        dataType:"",
        success:function(){
            
        },
        error:function(){
            
        }
})
```