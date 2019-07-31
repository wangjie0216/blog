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
## 数组

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
