## 数据类型
### (1)Undefined类型
此类型只有一个值就是"undefined"

定义了的变量但未初始化，其默认值么就是undefined;

但是未定义的变量，只能执行一个操作typeof操作
```
var message;
console.log(message);   //undefined;

console.log(age); //报错，这里的age是未定义的值

console.log(typeof message); //undefined; 这里是指undefined类型

console.log(typeof age); //undefined;
```

### (2)Null类型
此类型只有一个值就是"null";

从逻辑角度上看，null表示的是**空指针对象**，所以他本质类型应该是一个object

实质上undefined 是 null派生过来的值。 undefined == null返回的是true;

但是没有必要将一个变量声明时显示设置为undefined，但是当你声明一个准便保存对象的变量，这时可以显示设置为null;

### (3)Boolean类型
此类型有两个值：true和false;

所有数据类型的值都有与Boolean值等价的值。可以用转型函数Boolean()表示


数据类型 | 转化为true的值 | 转化为false的值
---|---|---
Boolean | true | false
String | 任何非空字符串 | ""空字符串
Number | 任何非零数字值（包括无穷大）| 0和NaN
Object | 任何对象 | null
Undefined | 不适用 | undefined

###  (4)Number类型
范围：
Number.MIN_VALUE ：5e-324

Number.MAX_VALUE : 1.7976931348623157e+308
```
var m = 015 // 13（8进制）
var m = 018 // 18（超过8进制的范围就按10进制解析）
//注意8进制在严格模式下是无效的

var n = 0x1A //10（16进制）
```
#### 浮点数值
该数值必须包含一个小数点，小数点后面必须有一个数字。小数点前面可以没有整数

浮点数，科学记数法。
```
var floatNam = 3.125e7; //31250000
```

#### Infinity（正无穷）和-Infinity（负无穷）和 NaN
- Infinity和-Infinity

Infinity和-Infinity不是可以参与计算的值。
        
可以使用isFinite()函数，这个函数在参数位于最小和最大数值之间会返回true;

 - NaN(非数值)
非数值是一个特殊的数值

NaN与任何值都不相等包括NaN，任何涉及到NaN的操作，都会返回NaN;

isNaN()函数，可以帮我们确定这个参数是否“不是数值”
```
isNaN(NaN); //true;
isNaN("blue"); //true;
isNaN(true);  //falsel 会被转化为1
isNaN("10"); //false  会被转化为10
```
#### 数值转换
- **Number();**

用于任意类型的数值转化，规则如下
1. 如果是Boolean类型，true为1,false为2
2. 如果是null,返回0
3. 如果是Undefined,返回NaN
4. 如果是String类型：
    - 如果是表示数字的字符"123" => 123; "011" => 11;(前面的0省略，所以无法转换八进制)
    - 如果字符串是空，返回0
    - 其余类型均返回NaN
```
var num1 = Number("0001111"); //1111
var num2 = Number("0xA"); //10
var num3 = Number("hello world"); //NaN
Var num4 = Number(""); //0
```
- **parseInt()**
parseInt()在转化字符串时，

1. 会忽略前面空格，直至找到一个非空字符
2. 如果找到的第一个非空字符不是数字或负号，会返回NaN
3. 否则parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到一个非数字字符。（小数点也算非数字字符）

```
var num1 = parseInt("123blue"); //123
var num2 = parseInt("22.5"); //22
var num3 = parseInt("0xf"); //15 (16进制)
var num4 = parseInt("070"); //56 (8进制)
```
parseInt可以接受第二个参数，表示转换时使用的基数（进制）
```
var num1 = parseInt("0xf",16); //15;
```

- **parseFloat()**

    - 与parseInt()类似。解析为浮点型，字符串中第一个小数点有效，其余无效。若没有小数点，解析为整数
    - 只转化为十进制格式
    
```
var num1 = parseFloat("123blue"); //123
var num2 = parseFloat("0xf"); //0
var num3 = parseFloar("22.34.5"); //22.34
```
### (5)String类型
- toString()方法
    - 转换为字符串toString()(null和undefind没有这个方法)
    - 调用数值的toString()方法时，可以传一个参数表示基数（进制）
- String()转型函数
    - 与toString()类似，但null=>"null",undefined=>"undefined";

### (6)Object类型
var Object = new Object();

属性
- constructor : 构造函数 Object();
- hasOwnProperty(propertypeName):用于检查给定属性在当前对象的实例中是否存在
- isPrototypeOf(object):用于检查传入的对象是都是当前对象的原型
- toLocalString():返回对象的字符串表示
- toString():返回对象的字符串表示
- valueOf()：返回对象的字符串，数值或布尔值。


## 引用类型
对象是某个特定的引用类型的实例。新对象是使用new 操作符后跟一个构造函数来创建的。

### Object()类型
```
//构造函数方法
var person = new Object();
person.name = "Amy";
person.age = 18;
```
```
//对象字面量方法
var person = {
    name:"Amy",
    age:18
};
```
可以用 .表示法或者[]表示法来访问对象属性

### Array类型
 - **length属性**
    
数组的length属性是可以自己设定，可以用来向数组后添加新项和移除项
```
var arr = ["red","yellow","blue"];
var Alength = arr.length;
arr[Alenght] = "black"; //向数组后面添加新项black
arr.length = 3; //移除新项
```
- **转换方法**
    - toLocaleString();  //据情况而定
    - toString();  //返回以逗号分隔的字符串
    - ValueOf();   //仍然返回数组
    - join(",");    //接受一个分割数组元素的参数，返回一个字符串。
- **栈方法**
    - push(); 向数组后面添加新项，返回数组的长度
    - pop();移除数组最后一项，返回被移除的项
- **队列方法**
    - shift(); 移除数组的第一项，返回该项
    - unshift(); 在数组前添加一项，返回数组长度
- **重排序方法**
    - reserve();数组倒序
    - sort();按ASCII码排序
```
var arr = [0,1,2,15,25];
arr.sort(); //0,1,15,2,25 
//因为按照ASCII码排序，所以排序会有问题

//解决方法
function compare(value1,value2){
    retuen value1-value2;
}
arr.sort(comapre);
```
- **操作方法**
    - concat(); //创建当前数组的副本，并将接收到的参数添加到副本末尾
    - 
    - slice(); //基于当前数组创造一个或多个子数组。slice(start,end);不包含end。没有end则从start开始到最后一个项
    - splice()
        1.删除 splice(0,2)删除数组前两项（位置，删除的个数）
        2.插入 splice(起始位置，0，新项);
        3.替换 splice(起始位置，删除的个数，替换或插入的项)
- **位置方法**
    - indexOf();
    - lastIndexOf();
- **迭代方法**  *接受一个在每一项上运行的函数*
    - every(); 数组每一项运行给定的函数，都返回true，则返回true;
    - some(); 数组每一项运行给定的函数，有一个返回true，则返回true;
    - forEach(); 数组每一项运行给定的函数,没有返回值
    - map(); 数组每一项运行给定的函数,返回运行结果组成的数组
    - filter();数组每一项运行给定的函数,返回为true的项组成的数组
- **归并方法**
    - reduce()从数组前面开始遍历
    - reduceRight()从数组后面开始遍历
```
var values = [1,2,3,4,5,6];
var sum = values.reduce(function(prev,cur,index,array){ 
    return pre+cur  //前一个值和当前值
});
alert(sum); //21
```
### Date()类型
### RegExp()类型
### Function()类型
函数是对象，函数名就是指向对象的指针

定义函数的两种方法
```
function sum(num1,num2){
    return num1+num2;
} //函数声明，解析器会率先读取；存在函数申明提升

var sum = function(num1,num2){
    return num1+num2;
} //变量赋值。必须要在调用之前使用
```
函数没有重载，但一个函数可以有多个名字（多个指针指向这一个函数）

#### 函数的内部属性
- **callee**属性
在函数内部有两个特殊的对象arguments(保存函数参数),this(作用域)

arguments对象还有一个callee属性，表示拥有这个arguments的函数

这个方法可以降低耦合度
```
function factorial(num){
    if(num<=1){
        num = 1;
    }else{
        num = num * factorial(num-1);
    }
}

factorial(5); //120;

这样函数的执行与函数名紧紧耦合在了一起，
可以
function factorial(num){
    if(num<=1){
        num = 1;
    }else{
        num = num * arguments.callee(num-1);  //这样即使函数名改变也不会紧紧耦合在一起
    }
}
```
- **this属性**引用的是函数执行的环境对象
在全局直接定义函数，则this值为window; 

若在对象中定义函数，this值为定义其的对象

- **caller** 是函数自己的属性。表示调用当前函数的函数的引用

#### 函数的属性和方法
- **length属性**表示函数接受的参数的个数
- **prototype属性（函数的原型）**
- **apply()和call()方法** 在特定的作用域中调用函数
```
var color = "red";
var o = {
    color:"blue",
}
function sayColor(){
    alert(this.color);
}
sayColor.call(o); //blue
sayColor.call(this); //red;
```
这两个方法也可以为函数传递参数
```
function sum(num1,num2){
    return num1+num2;
}
sum.apply(this,[0,1]); //1;
```
但是 call和apply在对函数传递参数这点上，call()给函数传递的参数必须列举出来，不能传入arguments数组等

- **bind()方法**创建一个函数实例（一个新的函数）其this值是传递给bind的参数

