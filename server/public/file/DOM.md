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
Document节点由以下特征：
- nodeType的值为9
- nodeName的值为"#document"
- nodeValue的值为null
- parentNode的值为null
- ownerDocument的值为null

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

要想取得文档中的所有元素，可以向getElementsByTagName()中传入‘*’。在javascript和css中，星号表示全部。

3. 第三个方法，是只有HTMLDocument类型才有的方法，是getElementByName()。返回带有name特性的元素

### 特殊集合
除了属性和方法，document对象还有一些特殊的集合。这些集合都是HTMLCollection对象，为访问文档常用的方法提供了快捷方式
- document.anchors,包含文档中**带name特性的**<a>元素。
- document.applets,包含文档中所有的<applet>元素，但<applet>元素不推荐用了，所以这个集合不建议使用
- document.forms,包含文档中所有的<form>元素，与document.getElementsByTagName("from")得到相同的结果。
- document.images,包含文档中所有的<img>元素，与document.getElementsByTagName("img")得到相同的结果。
- document.links,包含文档中所有带href特性的<a>元素。

### DOM一致性检测 p259
### 文档写入
有一个document对象已经存在很多年了，就是将输入流写入网页中的能力，有四种方法。
- **write()方法** 接受一个字符串，原样写入。
- **writeIn()方法** 接受一个字符串，在字符串末尾会加上一个换行符。这两个方法可以向网页中动态的添加内容。
```
document.write("<strong> + (new Date()).toString() + </strong>")；
//会在页面加载过程中，输出当前日期和时间代码，日期被包含在strong元素内。
```
还可以用这两种方法动态地包含外部资源。
```
//错误的写法：
<script type="text/javascript">
    document.write("<script type=\"text/javascript\" src=\"file.js\")" + "</script>");
</script>
//正确地写法：
<script type="text/javascript">
    document.write("<script type=\"text/javascript\" src=\"file.js\")" + "<\/script>");
</script>
```
为了避免写入的字符串"</script>"被解释为与外部的<script>标签匹配，需要在写入的字符串里加入转义字符 即写为<\\/script>即可

如果在文档最后调用了document.writet()函数，那么输出的内容会重写整个页面
```
<body>
    <p>。。。</p>
    <script type="text/javascript">
        window.onload = function(){
            document.write("Hello world!");
        }
    </script>
</body>
//这里 字符串“Hello world!”会重写整个页面
```
- open()和close()方法分别用于打开和关闭网页的输入流。如果是在页面加载期间使用write()和writeIn()方法，则不需要使用这两个方法。

## Element类型
Element类型用于XML或HTML元素，提供了对元素标签名、子节点及特性的访问，Element节点由以下特征:
- nodtType值为1
- nodeName值为元素的标签名
- nodeValue的值为null
- parentNode可能是Document或Element;
- 其子节点可以是很多类型。

```
<div id="myDiv"></div>

var div = document.getElementById("myDiv")
alert(div.tagName);   //Div
alert(div.tagName === div.nodeName); //true;
//验证了上面的第二条。
```
**注：在HTML中标签名始终以大写形式表示，但是在XML（有时候也包括XHTML）中，标签名则始终回与源代码中保持一致。**假如你不确定自己的脚本将会在XML还是HTML文档中执行，可以先将标签名转化为小写形式。

```
if(element.tagName == "div") {  //不这样写，容易出错。
                                    
}
if(element.tagName.toLowerCase()=="div") { //这样写最好。（适用于任何文档 ）
    
}
```
### HTML元素
所有HTNL元素都是由HTMLElement类型表示，不是直接通过这个类型，也是通过它的子类型表示。HTMLElement类型直接继承自Element并添加了一些属性。添加的这些属性分别对应于每个HTML元素中存在的下列标准特性:
- id,元素在文档中的唯一标识符。
- title,有关元素的附加说明信息，一般通过工具提示条显示出来
- lang,元素内容和的语言代码，很少使用
- dir,语言的方向，值为"ltr"（从左到右）或"rtl" （从右到左）；
- className,与元素的class特性对应，即为元素指定的CSS类。
```
<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"> </div>

var div = document.getElemntById("myDiv");
alert(div.id); //"myDiv"
alert(div.class); //bd
alert(div.title);

//也可以像下面这样，为每个属性赋予新值。
div,id = "someOtherId";
div.className = "ft";

以上方法要区分大小写
```
### gerAttribute()、set Attribute、removeAttribute();
每个元素都有一或多个特性，这些特性的用途是给出相应元素或其内容的附加信息。操作特征的方法主要有三个分别是
 gerAttribute()、set Attribute、removeAttribute();
 
#### 取得特性：getAttribute()
```
<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"> </div>

var div = document.getElemntById("myDiv");
alert(div.getAttribute("id"));    //"myDiv"
alert(div.getAttribute("class"));  //"bd"
```
**注意，传递给getAttribute()的特征名与实际的特征名相同，所以应传入class而并非className**

通过getAttribute()方法也可以取得自定义特性的值
```
<div id="myDiv" my_special_attribute="hello!"> </div>

var div = document.getElementById("div");
var value = div.getAttribute("my_special_attribute");
alert(value);   /hello!
```
用这个getAttribute()方法特性的名称是不区分大小写的，即ID和id都是代表一个特性。

任何元素的特性，都可以通过DOM元素本身的属性来访问，但是只有公认的（非自定义的）特性才会以属性的形式添加到DOM对象中。不过IE会为自定义特性也创建属性。
```
<div id="myDiv" my_special_attribute="hello!"> </div>

var div = document.getElementById("div");
alert(div.id);     //myDiv;
alert(div.my_special_attribute);         //undifinel(IE除外)
```
有两类特殊的特性，它们虽然由对应的属性名，但属性的值与通过getAttribute()返回的值并不相同。
- style：用于通过CSS为元素指定样式。通过getAttribute()访问时，返回的style特征值中包含的是CSS文本。通过属性访问时会返回一个对象。
```
div id="myDiv" style="background:red;"> </div>

var div = document.getElementById("div");
alert(div.getAttribute("style"));      //background:red; (返回CSS文本)
alert(div.style);                      //[object CSSStyleDeclaration]   （返回一个对象）
```
- onclick这样的事件处理程序。

在元素上使用时，onclick特性中包含的时JavaScript代码，通过getAttribute()访问时，会返回相应的代码字符串。通过属性访问时，会返回一个JavaScript函数。这是因为ionclick及其他事件本身就应该被赋予函数值。

由于这些差别，股只有在取得自定义特征值情况下才会使用getAttribute()方法。

#### 设置属性：setAttribute()
这个方法接收两个参数，要设置的特性名和值。如过特性值已经存在，setAttribute()会以指定的值替换现有的值。如果特性值不存在，setAttribute()则创建该属性并设置值。
```
div.setAttribute("id","someOtherId");
div.setAttribute("class","ft");
```
通过setAttribute()方法既可以操作HTML特性也可以操作自定义特性，通过这个方法设置的特性名一般会转换为小写形式。

#### removeAttribute()（IE6以前的版本不支持）
这个方法用于彻底删除元素的属性。调用这个方法不仅会清除特征的值，而且也会从元素中完全删除特性。

#### attribute属性 p266
Element类型时使用attribute属性的唯一一个DOM节点的类型。attribute属性中包含一个NamedNodeMap,与NodeList相似，也是一个动态的集合。元素的每一个特性都由Attr节点表示，每个节点都保存在一个NamedNodeMap对象中。NamedNodeMap对象拥有下列方法：
- getNodeItem(name):返回nodeName属性等于name的节点；
- removeNamedItem(name):移除列表中nodeName属性等于name的节点
- setNamedItem(node):向列表中添加节点，以节点的nodeName属性为索引;
- item(pos):返回位于数字pos位置处的节点

一般还是使用getAttribute(),setAttribute(),removeAttribute()方法。

removeAttribute()和removeNamedItem()唯一的区别就是。removeNamedItem()返回表示被删除特性的Attr节点。
要遍历元素的特性，可以使用attribute属性，以下代码展示了如何迭代元素的没一个特性，然后将他们构成name=“value” name="value"
```
function outputAttribute(element){
    var pairs = new Array()，
    attrName,
    attrValue,
    i,
    len;
for(i=0,len=element,attributes.length;i<len;i++){
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    pairs.push(attrName + "=\""+attrValue+"\"");
}
    return paris.join(" ");
}
```
注： 

- 针对attributes对象中的特性，不同浏览器返回顺序不同。他们在代码中出现的顺序不一定和attributes对象中的顺序一致。
-  IE7及更早的版本会返回HTML中所有的特性值。

针对IE7及更早版本，每个特性节点都有一个specified属性，这个属性值如果是true，则意味着HTML指定了相应特性。可以通过setAttribute()方法设置该特性。为设置的都是false.所以上述代码可以改为：
```
function outputAttribute(element){
    var pairs = new Array()，
    attrName,
    attrValue,
    i,
    len;
for(i=0,len=element,attributes.length;i<len;i++){
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    if(element.attributes[i].specified) {
    pairs.push(attrName + "=\""+attrValue+"\"");
    }
}
    return paris.join(" ");
}
```

#### 创建元素
**createElement()方法**可以创建元素，这个方法接收一个参数，即要创建元素的标签名。这个标签名在HTML中不区分大小写，但在XML中区分。
```
var div = document.createElement('div');
div.id = "myNewDiv";
div.clssName = "box";
```
**注意：** 新元素并未被添加到文档数中，因此设置的这些属性不会被显示，可通过**appendChild()、insertBefore()或replaceChild()方法**。

下面方法会把新创建的元素添加到文档<body>中
```
document.dody.appendChild(div);
```
#### 元素的子节点
元素的childNodes属性中包含了它的所有节，但不同浏览器在看待这些节点方面存在显著不同:
```
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

var ul = document.getElementsByTagName('ul');
alert(ul.childNodes.length); //3或7
```
在IE中，<ul>元素中会有三个节点，分别是三个<li>元素，但是在其他浏览器，会解析每个<li>元素之间的空白符。如果将每个<li></li>元素后面的元素空白符删除，那么所有浏览器会返回相同数目的子节点。
```
<ul id="myList">
    <li>Item 1</li><li>Item 2</li><li>Item 3</li>
</ul>
```
### Text类型
文本节点是由Text类型表示，包含的是可以照字面解释的纯文本内容。纯文本中可以包含转义后的HTML字符 Text节点具有以下特征：
- nodyType的值为3;
- nodeName的值为"text";
- nodeValue的值为节点所包含的文本;
- parentNode是一个Element;
- 没有子节点                                                

可以通过nodeValue属性或data属性访问Text节点中包含的文本，这两个属性中包含的值相同。使用下面几个方法可以操作节点中的文本。
- appendData(text):将text添加到节点的末尾
- appendData(offset,count):从offset指定的位置添加删除count个字符
- deleteDate(offset,count):从offset指定位置开始删除count个字符
- insertData(offset,text):从offset指定位置插入text
- replaceData(offset,count,text):用text替换从offset指定位置开始到offset+count为止的文本
- splitText(offset):从offset指定的位置将当前文本节点分成两个文本节点。
- substringData(offset,count):提取从offset指定的位置开始到offset+count为止的文本

除了这些方法，文本节点的length属性保存着节点中字符的数目。nodeValue.length和data.length保存着同样的值
```
<p id="myDiv">哈哈哈</p>
<p id="text"></p>

var div = document.getElementById('myDiv');
var text = document.getElementById('text');
var words = div.firstChild.nodeValue;   
text.appendData(words);       //哈哈哈
alert(words);     //哈哈哈
```
还可以通过div.firstChild.nodeValue=lalla;来改变文本节点中的文本。字符会经过HTML或XML编码
```
div.firstChild.nodeValue = "some <strong>other</strong> message";
//输出结果是”some &lt;strong&gt;other&lt;strong&gt;message“;
```
#### 创建文本节点
**document.createTextNode()**创建文本节点，这个方法接收一个参数———要插入节点中的文本。作为参数的文本也将按照HTML或XML格式进行编码。

在创建文本节点时，也会为其设置ownerDocument属性。但是要把新节点添加到文档树中，我们才能在浏览窗口看到新节点。
```
var element = document.createElement('div');
element.class="message";
var textNode = document.creatTextNode('hello world!');
element.appendChild(textNode);
document.body.appendChild(element);
```
一般来说，每个元素只有一个文本子节点，但在某些情况下也可以包含多个文本子节点。
```
var element = document.createElement('div');
element.class="message";
var textNode = document.creatTextNode('hello world!');
element.appendChild(textNode);

var anotherTextNode = dpcument.createTextNode('hahah');
element.appendChild(anotherTextNode);

document.body.appendChild(element);
```
如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示。
#### 规范化文本节点
DOM中存在相邻同胞的文本节点很容易导致混乱，于是催生了一个能够将相邻文本节点合并的方法，**normalize()方法**。
```
var element = document.createElement('div');
element.class="message";
var textNode = document.creatTextNode('hello world!');
element.appendChild(textNode);

var anotherTextNode = dpcument.createTextNode('hahah');
element.appendChild(anotherTextNode);

document.body.appendChild(element);
alert(element.childNodes.length); //2
element.normalize();
alert(element.childNodes.length);  //1
alert(element.firstChild.nodeValue);    //"hello worldhahah";
```
#### 分割文本节点
**spiltText()方法**会将一个文本节点分割成两个文本节点。按照指定位置分割nodeValue的值。原文本节点包含从开始到指定位置的内容，新文本节点包含剩下的文本，这个方法会返回 剩下的新文本节点。
```
var element = document.createElement('div');
element.class="message";
var textNode = document.creatTextNode('hello world!');
element.appendChild(textNode);
document.body.appendChild(element);
var newNode = element.firstChild.spiltText(5);
alert(element.firstChild.nodeValue);   //hello;
alert(newNode.nodeValue);             // world;
alert(element.childNodes.length)       //2;
```
### Comment类型
注释在DOM中是通过Comment类型来表示，Comment节点具有以下特点
- nodeType的值为8
- nodeName的值为“#commemnt”
- nodeValue的值是注释的内容
- parentNode可能是Document或Element
- 没有子节点

Comment类与Text类型来自相同的基类。除了splitText()之外的所有字符操作方法，他也可以通过nodeValue或data属性来获得注释的内容

注释节点可通过其父节点访问
```
<div id="myDiv">
    <!--a comment-->
</div>

var div = document.getElementById('myDiv')
var comment = div.firstChild;
alert(comment.nodeValue);    //a comment;
```
使用document.creatComment()并为其传递注释文本也可以创建注释节点。但开发人员很少会创建和访问注释节点，因为注释节点对算法鲜有影响，此外，浏览器也不会识别位于</html>注释后面的注释。要访问注释节点，一定要保证他是<html>元素的后代。

### CDATASection类型
CDATASecton类型只针对XML文档，表示的是CDATA区域。与Comment类似，CDATASection类型继承自Text类型。拥有除splitText()之外的所有字符串操作方法。CDATASection节点具有以下特征
- nodeType的值为4
- nodeName的值为"#cdata-section";
- nodeValue的值是CDATA区域中的内容
- parentNode可能是Document或Element
- 没有子节点

### DocumentType类型
DocumentType包含着与文档doctype有关的信息，它具有以下特征：
- nodeType的值为10
- nodeName的值为doctype的名称
- nodeValue的值为null
- parentNode是Document
- 没有子节点

### Attr类型
元素的特性在DOM中以Attr类型来表示，特性就是存在于元素的attributes属性中的节点。特性节点具有以下特征：
- nodeType的值为2
- nodeName的值是特性的名称
- nodeValue的值是特性的值
- parentNode的值为null
- 在HTML中没有子节点
- 在XML中子节点可以是Text或者EnitityReference

Attr对象有3个属性，name,value和specified。其中name是特性名称（与nodeName值相同），value是特性的值（与nodeValue的值相同），而specified是一个布尔值，用以区别特性是在代码中指定，还是默认的。

使用document.creareAttribute()并传入特征的名称可以创建新的特征节点。
```
var attr = document.createAttribute('align');
attr.value = left;
element.setAtteributeNode(sttr);
alert(element.attribute['align'].value);    //left;
alert(element.getAttributeNode('align').value);  //left;
alert(element.getAttribute('align'));      //left;
```
# DOM扩展
## 选择符API
### querySelector()方法
querySelector()方法接收一个**CSS选择符**，返回与该模式匹配的第一个元素，如果没有匹配的元素，则返回null
```
//取得body元素
var body = document.quertSelector('body');

//取得ID为“myDiv”的元素
var myDiv = document.querySelector('#myDiv');

//取得类为“selected”的第一个元素
var selected = document.querySelector('.selected');

//取得类为“button”的第一个图像元素
var img = document.querySelector('img.button');
```
### querySelectorAll()方法
querySelectorAll()方法接收的参数与querySelector()方法一样，是一个CSS选择符，但这个方法返回的是一个NodeList的实例，只要传给querySelectorAll()方法的CSS选择符有效，该方法都会返回一个NodeList元素。
```
取得某<div中所有的<em>元素
var ems = document.getElementById('myDiv').querySelectorAll('em');

//取得类为selected的所有元素
var selecteds = document.querySelectorAll('.selected');

```
### matchSelector()方法

## 元素遍历
对于元素间的空格，IE9之前的版本不会返回文本节点，而其他所有浏览器都会返回文本节点，这样就导致在使用childNodes和firstChild等属性时行为不一致。为了弥补这个差距，定义了下面属性

- childElementCount:返回子元素（不包括文本节点和注释）的个数
- firstElementChild:指向第一个元素；firstChild的元素版
- lastElementChild:指向最后一个元素;lastChild的元素版
- previousElementSibling:指向前一个同辈元素；previousSibling的元素版
- nextElementSibling:指向后一个同辈元素；nextSibling的元素版

利用这些元素不必担心空白文本节点，从而更方便的查找DOM元素。

## 与类相关的扩充
### getElementByClassName()方法
这个方法接收一个参数，一个包含一或多个类名的字符串，返回带有所有指定类的所有元素的NodeList。

### classList属性
可以通过className属性添加，删除和替换类名。如下例：

一个div元素有三个类名，要从中删除一个类名，需要把这三个类名拆开，删除不想要的那个，然后再把其他类拼成一个新字符串
```
<div class="bd user disabled">...</div>

//删除user类

//首先取得雷鸣字符串并拆分成数组
var classNames = div.clsaaName.split(/\s+/);

//找到要删的类名
var pos = -1,i,len;
for(i=0,len=classNames.length;i<len;i++){
    if(className[i] == user){
        pos = i;
        break;
    }
}
//删除类名
classNames.splice(i,1);

//把剩下的类名拼成字符串并重新设置
div.className = className.join('');
```
HTNL5新增了一个操作类名的方式，那就是为所特有元素添加classList属性。这个classList属性时新集合类型DOMTkoenList的实例。
- add(value):将给定字符串添加到列表中，如果值已经存在，就不添加了
- contains(value):表示列表中是否存在给定的值，如果存在返回true,不存在false.
- remove(value):从列表中删除给定的字符串
- toggle(value):如果列表中已经存在给定值，删除它，不存在，添加它。

所以前面删除类名就可以改成下面一行代码
```
div.classList.remove('user');
```

### 焦点管理
document.activeElement属性，这个属性始终会引用DOM中当前获得了焦点的元素。元素获得焦点的方法有页面加载，用户输入和在代码中调用focus()f方法。
```
var button = document.getElementById('mybutton');
button.focus();
alert(document.activeElement === button); //true;
```

另外新增了document.hasFocus()方法，这个方法用于确定文档是否获得了焦点

通过检测文档是否获得了焦点，可以直到用户是不是在于页面交互

### HTMLDocument的变化
#### readyStata属性
- loading，正在加载文档
- complete，已经加载完文档
```
if(document.readyState == "complete"){
    //执行操作
}
```

#### 兼容模式
document的compatMode属性可以知道浏览器采用了哪种渲染模式
- 标准模式下，document.compatMode的值等于CSS1Compat
- 混杂模式下，document.compatMode的值等于BackCompat
