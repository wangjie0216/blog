---
title: typeScript学习笔记
date: 2019-07-22
# 标签
tags:
 - typeScript
#  文章目录
categories:
 -  typeScript学习笔记
---
<!--  -->
::: tip 介绍
下面的内容在，主要事记录学习typeScript过程的笔记。
:::


## 1.环境搭建

  1.安装node.js，百度搜索node官网下载node,然后安装，过程比较简单，不再赘述

  2.下载typescript包。

 ```
     npm install typescript -g

     tsc --version

```
出现版本号，说明安装成功。

## 2.初试typescript

1.初始化项目`npm init -y`,  
2.输入命令`tsc --init`生成`tsconfig.json`文件,这是一个`typescript`的配置文件  
3.安装`@type/node`,主要事解决模块声明文件类型问题。  
4.创建一个`helloworld.ts`文件，输入以下内容  
```
var name:string = "你的名字"
console.log(name)
```
5.输入`tsc`命令，会生成一个`helloworld.js`文件  
6.然后运行文件`node helloworld.js`,此时就会看到打印内容

## 3.typescript的类型

1.undefind:定义了类型(任何类型)，但是没有赋值，都是undefind的类型  
2.number:就事常见的数字类型  
3.string:双引号或者单引号内的内容都是字符串  
4.boolean:布尔类型，和js一样`true`or`false`  
5.array:数组类型  
6.eumn:枚举  
7.any:任意类型  
8.void:空类型  
9.null:空类型  
10.tuple:元祖类型

## 4.typescript的函数定义方式

1.函数声明法
```
function search(age:number):string{
  return '多大了？'+ age + '岁了'
}
console.log(search(18))
//打印出：多大了？18岁了
```
2.函数表达式法
```
let search = function(age:number):string{
  return '多大了？'+ age + '岁了'
}
console.log(search(18))
//打印出：多大了？18岁了
```
3.箭头函数
```
let search = (age:number):string =>{
  return '多大了？'+ age + '岁了'
}
console.log(search(18))
//打印出：多大了？18岁了
```
## 5.typescript函数参数
1.定义函数要加function  
2.函数的参数可有可无，多个参数之间用逗号隔开  
3.函数返回值可有可无，没有返回值，返回类型是void  
4.每个参数由名字和类型组成，之间用分号(:)隔开

例如：
```
function search(age:number):string{
  return '多大了？'+ age + '岁了'
}
console.log(search(18))
//打印出：多大了？18岁了
```
参数：
1.可以定义一个可以传也可以不传的参数,通过?来标记  
例如：
```
function search(age:number,name?:string):string{
  if(name!==undefined){
    return '我叫'+ name +'多大了？'+ age + '岁了'
  }else{
    return '多大了？'+ age + '岁了'
  }
}
```
2.可以给参数添加默认值,不传值的时候就使用默认的值
例如：
```
function search(age:number=20,name?:string="佚名"):string{
  if(name!==undefined){
    return '我叫'+ name +'多大了？'+ age + '岁了'
  }else{
    return '多大了？'+ age + '岁了'
  }
}
```
3.传递不确定个数的参数时，可以定义一个数组接收
例如：
```
function search(...species:string[]):string{
   var yy:string = '找到了'
   for(let i=0;i<species.length;i++){
       yy = yy + species[i]
       if(i<species.length){
           yy=yy+"、"
       }
   }
   yy=yy+'的小姐姐'
   return yy
}
var result:string = search('22','肤白','貌美','大长腿')
console.log(result)
```
## 6.数组

1.数组的声明方式
```
let arr1:number[]//声明一个数值类型的数组
let arr2:Array<string>//声明一个字符串类型的数组

```
2.对数组进行赋值  
```
let arr1:number[] = []
let arr2:number[] = [1,2,3,4]
let arr3:Array<string> = ['你好','数组']
let arr4:Array<boolean> = [true,false,true]
```
注：定义一种类型的数组，数组内只能存储一种类型元素  

3.构造函数赋值
```
let arr1:number[]= new Array()
let arr2:number[]= new Array(1,2,3,4)
let arr3:Array<string> = new Array('你好'，'数组')
```
4.元祖
```
let arr1:[string,number,boolean]
//正确的初始化
arr1 = ['你好',1,true]
//错误的初始化
arr1 = [1,true,"你好"]
```
注：元祖类型表示一个已知数量和类型的数组，各元素的类型可以不相同，

## 7.引用字符串
1.基本类型字符串：用单引号或者双引号括起来得一串字符串  
2.引用类型字符串：用new实例化字符串类型   
```
let str:string = "1231"
let str:String = new String('123123')
```
3.字符串长度得获取
```
let str:string = '123123'
console.log(str.length)//直接加length
```
4.查找字符串
```
let str:string = '12313你好21231'
let str1:string = '你好'
console.log(str.indexOf(str1))  // str.indexOf(str1)基本语法，从前向后找，如果没有找到返回 -1,返回值是字符串得下标
console.log(str.lastIndexOf(str1))//从后向前找
```
5.替换字符串
```
str.replace(subStr,newStr) //subStr表示被替换得字符串，newStr表示要替换得字符串
```
6.字符串的截取
```
str.substring(startIndex,[endIndex])
//startIndex表示开始的下标，endIndex表示结束的下标，可选可不选，
```
## 8.引用日期对象
1.创建日期时，需要声明Date()类型
```
let time:Date = new Date()
console.log(time) // 打印出当前日期
```
2.传递一个整数
```
let time:Date = new Date(1000) 
console.log(time) //打印出1970-01-01T00:00:01.000Z  
//这个整数代表距离1970-01-01 00:00:00的时间
```
3.传递字符串
```
let time:Date = new Date('2019-08-01 17:18:00')
console.log(time)//打印出输入的时间，还有2019/08/01和2018-08-01T02:30:00两种格式。
```
4.传递年月日时分秒的变量
```
let time:Date = new Date(year,month,day,hours,minutes,seconds,ms)
```
## 9.引用正则
1.字面量法  
```
let reg:RegExp = /123/
let res:RegExp = /123/gi   //g全局的意思  i忽略大小写
```
2.构造函数法  
```
let reg:RegExp = new RegExp('123')
let reg:RegExp = new RegExp('123','gi')
```

## 10.类的声明和使用
和es6的类的使用基本相同，只是每个属性要加上类型  
```
class Hello{
  name:string;
  age:string;
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  say(){
    console.log('你好')
  }
}
let wj:Hello = new Hello('小红',18)
wj.say()
```
## 11.修饰符
1.public:公有修饰符，可以在类内或者类外使用public  
2.protected:受保护的修饰符，可以在本类或者子类中使用  
3.private:私有修饰符，只可以在类内使用private  
```
class  Helloworld{
  public name:string
  protected weight:string
  private age:number
  public constructor(weight:string,name:string,age:number){
    this.name = name
    this.weight = weight
    this.age = age
  }
  public sayHello(){
    console.log('你好')
  }
  protected sayName(){
    console.log('林缘')
  }

}
var wj:Helloworld = new Helloworld('林缘','80kg',25)
console.log(wj.name)
console.log(wj.weight)//报错
console.log(wj.age)//报错

wj.sayHello()
wj.sayName()//报错
```
## 12.类的继承
创建类的时候继承一个已存在的类，这个已经存在的类成为父类，
继承的称为子类，类的继承使用关键字`extends`,子类除了不能继承父类的私有成员方法和属性，其他的都可以继承。
```
class Shap{
  Area:number
  constructor(a:number){
    this.Area = a
  }
}

class Circle extends Shape{
  disp():void{
    console.log("圆的面积："+this.Area)
  }
}
var obj = new Circle(223)
obj.disp()
```
1.子类只能继承一个父类，不能继承多个类，但是可以多重继承  
```
calss Root{
  str:string
}
class Child extends Root{}
class Leaf extends Child{}//多重继承，继承了Child 和Root的类
var obj = new Leaf();
obj.str = "你好"
console.log(obj.str)
```
2.类继承后，子类可以对父类的方法重新定义，这个过程叫重写，  
其中`super`关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
```
calss PrinterClass{
  doPrint():void{
    console.log('父类的doPrint方法')
  }
}
class StringPrinter extends PrinterClass{
  doPrint():void{
    super.doPrint()//调用父类方法
    console.log("子类的doPrint方法")
  }
}
```
3.static关键字用于定义类的数据属性和方法为静态的，，静态成员可以直接通过类名调用
```
class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("num 值为 "+ StaticMem.num) 
   } 
} 
 
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法
```
注：文章内容参考菜鸟教程和技术胖