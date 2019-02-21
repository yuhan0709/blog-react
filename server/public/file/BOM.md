# BOM
## window对象
在全局作用域中声明的变量、函数都会变成window对象的属性和方法。但是**全局变量不要能通过delete操作符删除，而直接在window对象上定义的属性可以。**
```
var age = 29; //全局变量
window.color = "red";        //window对象

delete window.age;      //在IE<9时抛出错误，在其他浏览器中都返回false;

delete window.color;    //在IE<9时抛出错误，在其他浏览器中返回true;

alert(window.age);      //29
alert(window.color);    //undefined;
```
尝试访问未声明的变量会抛出错误，但是通过查询window对象，可以知道某个可能为声明的变量是否存在。
```
//这里会抛出错误，因为oldValue未定义；
var newValue = oldValue;

//这里不会抛出错误，这是一次查询。
var newValue = window.oldValue;          //undifined
```
### 窗口位置
IE、Safari、Opera、Chrome都提供了screenLeft和screenTop分别表示窗口相对于屏幕左边和上边的位置。Firefox则在screenX和screenTop属性，分别用于窗口相对于屏幕左边和上边的位置。

使用下面的代码可以跨浏览器取得窗口左边和上边的位置。
```
var LeftPos = (typeof window.screenLeft == "number")?window.screenLeft:window.screenX;
var TopPos = (typeof window.screenTop == "number")?window.screenTop:window.screenY;
```
### 导航和打开窗口
使用window.open()方法可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。这个方法接收四个参数：要加载的URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览器历史纪录中当前加载页面的布尔值。

---
**弹出窗口屏蔽程序**

```
var blocked = false;
try{
    var wroxWin = window.open("url" , );
    if(wroxWin == null){
        blocked = true;
    } catch(ex){
        blocked = true;
    } 
    if(blocked) {
        alert('The popup was blocled!');
    }
}
```
以上代码都可以检测出调用window.open()打开的弹出窗口是不是被屏蔽了。但是要注意的是，检测弹出窗口是否被屏蔽只是一方面，它并不会阻止浏览器显示与被屏蔽的弹出窗口有关的消息。

### 间歇调用和超市调用

* 超时调用

是在指定的时间过后执行代码。 超时调用需要调用window对象的**setTimeout()方法**。这个方法接收两个参数：要执行的代码和以毫秒表示的时间（在执行代码前需要等待多少毫秒）。

超市调用返回一个数值ID。

要取消未执行的超时调用计划，可以调用**clearTimeout()**方法。
```
var timeoutId = setTimeout(function(){
    alert('');
},1000);
//取消。
clearTimeout(timeoutId);
```
* 间歇调用

是按照指定的时间间隔重复执行代码，直至间歇调用被取消或者页面被卸载。

需要**setInterval()方法**。这个方法接收两个参数：要执行的代码和以毫秒表示的时间；也返回一个间歇调用ID。

取消间歇调用可以使用**clearInterval()**;
```
var num = 0;
var max = 10;
var intervalld = null;
function incrementNumber(){
    num++；
    //如果执行次数达到了max设定值，则取消后续尚未执行的调用。
    if(num == max){
        clearInterval(intervalId);
        alert("Done");
    }
}
intervalId = setInterval(incrementNumber,500);
```
### 系统对话框

- alert()警告框。
- confirm()确认框。
    ```
    if(confirm("Are you sure?")) {
         alert("I'm so glad you're sure!")
    }else{
        alert('I'm sorry to hear you're not sure.")
    }
    ```
- prompt()，提示框。

用于用户输入一些文本，接收两个参数：要显示给用户的文本提示和文本输入域的默认值

## location对象(P209)
可以通过编程的方式来访问浏览器的导航系统，设置相应的属性，可以逐段或整体性的修改浏览器的url;

## navigator对象 (P210)
提供了与浏览器有关的信息。

### 检查插件
- name: 插件的名字；
- description：插件的描述；
- filename：插件的文件名;
- length：插件所处理的MIME类型数量；

## history对象
history对象保存着用户上网的历史纪录，从窗口被打开的那一刻算起。

使用**go()方法**可以在用户的历史记录中任意跳转，可以向后也可以向前。这个方法接收一个参数：表示向前或向后跳转页面数的一个整数值。

也可以给go()方法传递一个字符串参数。浏览器会跳转到历史记录中包含该字符串的第一个位置。可能前进也可能后退。

另外可以使用back()和forward()来代替go()。这两个方法模仿浏览器“后退”和“前进”按钮。

# DOM(文档对象模型)
是针对HTML和XML文档的一个API（应用程序编程接口），可以将任何html或XML文档描绘成一个由多层节点构成的结构。

## DOM节点
HTML文档中的所有内容都是节点。
- 整个文档是一个文档节点
- 整个HTML元素是一个元素节点
- HTML元素内的文本是文本节点
- 每个HTML属性是属性节点
- 注释是注释节点

### 节点的父、子和同胞
父（parent）、子（child）和同胞（sibling）

---

每一个节点都有一个childNodes属性，其中保存这一个NodeList对象。NodeList是一种类数组对象，用于保存一组有序节点，可以通过位置来访问这些节点。
```
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNode.item(1);
var count = someNode.childNode.length;
```
对arguments对象使用Array.prototype.slice()方法可以将其转换为数组，用以下方法，也可以将NodeList对象转化为数组。
```
function convertToArray(nodes){
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes,0);    //针对非IE8及其以下浏览器
    }catch(ex){
        array = new Array();
        for(var i=0,len=nodes.length;i<len;i++){
            array.push(nodes[i]);
        }
    }
    return array;
}
```

---
每一个节点都有一个parentNode属性，该属性指向文档数中的父节点。包含在childNodes列表中的所有节点都具有相同的父节点，他们的parentNode属性指向同一节点。

可以通过使用列表中每个节点的**previousSibling**和**nextSibling**属性，访问同一列表的其他节点。

父节点的**firstChild**指向第一个节点。**lastChild**指向最后一个节点

### 操作节点
**appendChild()方法**:用于向childNodes列表的末尾添加一个节点，返回新增节点。
```
var returnedNode= someNode.appendChild(someNode.firstChild);    //把列表的第一个节点添加到最后一个节点的位置。
alert(returnedNode == someNode.firstChild);   //false;
alert(returnedNode == someNode.lastChild);    //true;
```
**insertBefore()方法**:把节点添加到列表的指定位置。

接受两个参数：要插入的节点和作为参照的节点。*被插入的节点会变成参照节点前的一个同胞节点。*
```
//插入成为最后一个节点。
returnedNode = someNode.insertBefore(newNodel,null);
alert(newNode == someNode.lastChild); //true;

//插入成为第一个子节点
returnedNode = someNode.insertBefore(newNode,someNode.firstChild);
alert(returnedNode == newNode); //true;
alert(returnedNode == someNode.firstChild); //true

```
**replaceChild()方法**替换节点

接受两个参数：要插入的节点和要替换的节点。要替换的节点被移除，同时由要插入的节点代替它的位置，插入的节点的所有关系指针都会从被它替换的节点复制过来。*返回被替换的节点*

```
//替换第一个子节点
var returnedNode = someNode.repalceChild(newNode,someNode.firstChild);
```

**removeChild()方法**移除节点。

接收一个参数，即要移除的节点，*返回被移除的节点*

**++注：这两个方法，不管是被替换的节点，还是被移除的节点仍然还在文档中，但它在文档中已没有自己的位置。++**

---
**其他方法**
有两个方法是所有类型的节点都有的。
1. **cloneNode()**方法用于创建调用这个方法的接待你的一个完全相同的副本。**cloneNode()方法接受一个布尔值参数，表示是否进行深复制。**
-     true : 执行深复制，复制节点及其整个子节点树
-     false：执行浅复制，只复制节点本身。复制后返回节点副本数与文档所有，但并没有为它指定父节点。
```
<ul>
    <li>1</li>
	<li>2</li>
	<li>3</li>
</ul>


var mylist = document.getElementsByTagName('ul');
var deeplist = mylist[0].cloneNode(true);
alert(deeplist.childNodes.length);  //3(IE<9)或7；(深复制包含子节点)

var shallowlist = mylist[0].cloneNode(false);
alert(shallowlist.childNodes.length);  //0;  （浅复制不包含子节点）
```
注：deeplist.childNodes.length中的差异主要是因为IE8及更早的版本与其他浏览器处理空白字符的方法不一样。IE9之前的版本不会为空白符创建节点。

- **normalize()**处理文档树中的文本节点

## Document类型
Document类型可以表示HTML页面或其他基于XML的文档，不过，最常见的应用还是作为HTMLDocument实例的document对象。

### 文档的子节点
DOM标准规定Document节点的子节点可以是DocumentType、Element、ProcessingInstruction或Comment，但还有两个内置的访问其子节点的快捷方式。
- **documenElement属性**，该属性时钟指向HTML页面中的<html>元素 
```
<html>
    <body>
    </body>
</html>

var html = document.documentElement; //取得<html>的引用。
alert(html === document.childNodes[0]);   //true;
alert(html === document.firstChild); //true;
```
document对象还有一个body属性，直接指向<body>元素。
```
var body = document.body;
```
- Document另一个可能的子节点是DocumentType。通常将<!DOCTYPE>标签看成一个与文档其他部分不同的实体，可以通过doctype属性
```
var doctype = document.doctype;  //取得对 <!DOCTYPE>的引用。
```

### 文档信息
作为HTMLDocument的一个实例，document对象还有一些标准的Document对象没有的属性。
 title：<title>包含着<title>元素中的文本，这个属性可以取得当前页面的标题，也可以修改当前页面的标题并反映在浏览器的标题栏中。
```
var originalTitle = document.title;  //取得文档标题
document.title = "New page title";   //设置文档标题
```
这三个属性都与对网页的请求有关，它们是URL，domain和referrer。

- URL属性包含页面完整的url(地址栏上显示的URL)。
```
//取得完整URL
var url = document.URL;
```
- domain属性中包含页面的域名。
```
//取得域名
var domain = document.domain;
```
- referrer属性中可能会包含空字符串。保存着连接到当前页面的那个页面的URL
```
//取得来源页面的URL
var referrer = document.referrer;
```
**注：URL与domain属性是相互关联的，而且这三个属性中只有domain是可以设置的，但domain不能设置为URL中不包含的域。**
```
//来自p2p.wrox.com域（URL中包含的域名）
document.domain = "wrox.com";      //成功
document.domain = "nczonline.net"; //出错
```
当页面中包含来自其他子域的框架或内嵌框架时，由于跨域安全限制，来自不同子域的页面无法通过JavaScript通信。但通过将每个页面的document.domain设置为相同的值，这些页面就可以互相访问对方包含的JavaScript对象了。例如，一个页面加载自 www.wrox.com,其中包含一个内嵌框架，框架内的页面加载自 p2p.wrox.com。如果将这两个页面的 document.domain的值都设为 wrox.com。他们就可以互相通信了。

浏览器对domain属性还有一个限制，如果域名一开始是“松散的”（loose）,那么不能再将它设置为“紧绷的”（tight）;
```
//假设页面来自于p2p.wrox.com域
document.domain = "wrox.com";   //成功
document.domain = "p2p.wrox.com";   //错误
```
### 查找元素
Document类型提供了两个取得元素的方法：getElementById()和getElementsByTagName()。
1. **getElementById()**接收一个参数，要取得的元素的ID。注：这里的ID必须要与页面中的元素id特性严格匹配包括大小写。
```
<div id="myDiv"> lalall </div>

var div = document.getElementById("myDiv");   //取得<div>元素的引用。

var div = document.getElementById('mydiv');   //无效的ID（在IE7及其更早版本可以）
```
**注：IE8及较低版本不区分ID的大小写。**

==注意==
- 如果页面中出现多个元素的ID值相同，getElementById()只返回文档中第一次出现的元素。
- IE7及较低版本，还出现一个问题：如果name特性和给定的ID匹配的++表单元素++也会被该方法返回。如果表单元素的name等于指定的ID，而且该元素在文档中位于带有给定ID元素的前面，IE会返回那个表单元素。
```
<input type=“text" name="myElement" value="Text field">
<div id="myElement">A div</div>

var myElement = document.getElementById("myElement");    //在IE7及较低版本：取得的是表单元素input
                                                         //在较高版本取得的是div
```
2. **getElementsByTagName()**接收一个参数，即要取得的元素的标签名，返回的是包含零或多个元素的NodeList。并返回一个HTMLCollection。
```
var images = document.getElementsByTagName("img");      //取得页面中所有的<img>元素。
```
与NodeList对象类似，可以用方括号语法或item()方法来访问HTMLCollection对象中得项。
```
alert(images.length);           //输出图像的数量
alert(images[0].src);           //输出第一个图像元素的Src特性
alert(images.item(0).src);      //输出第一个图像元素的src特性
```
HTMLCollection对象还有一个方法，叫做namedItem(),使用这个方法可以通过元素的name特性取得集合中的项
```
<img src="myImage.jpg" name="myImage">
//可以通过如下方式从images变量中取得这个<img>元素：
var myImage = images.namedItem("myImage");

//也可以用如下方式
var myImage =images["myImage"];
```
对HTMLCollection而言，用方括号传入数值或者字符串的索引值。在后台对数值索引值会调用item()，对字符串索引值会调用namedItem();
