---
title: js对象
date: 2019-09-18
# 标签
tags:
 - js基础
#  文章目录
categories:
 -  js
---


# 对象

   js中有七种数据类型，其中六种原始类型，因为原始类型的值只包含一种  
   而对象用来存储键值对和更复杂的实体。创建一个空对象：
```
let user = new Object();//构造函数法
let user = {};//字面量法
```
   ## 文本属性

   我们可以在创建对象时，在{}中添加一些键值对  
```
let user = {
    name: 'wj',// 键 name  值  wj
    age: 18, 
};
```
   读取文件属性
```
console.log(user.name) // wj
console.log(user,age)  //18
```
  添加一个属性
```
user.isAdmin = true
```
  删除一个属性
```
delete user.age
```
  也可以用多字词语来命名，但是必须要加上引号  
```
let user = {
    name: 'wj',
    age: 18,
    'like birds': true,
};
```
  多词属性不能用点来读取，可以使用[]来读取，对任何属性都有效  
```
let user = {};
user["likes birds"] = true;
console.log(user["likes birds"]) // true
delete user["likes birds"];
```
  []中可以使用变量来获取属性
```
let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true;
```
  ## 引用复制
  对象和其他原始类型相比有一个重要的区别，对象是按引用存储复制的。  
  变量存储的不是对象，而是对象的内存地址，是对象的引用。  
  ```
  let user = { name: 'wj'};
  let admin = user;//复制引用
  ```
  现在有两个变量，但是都是指向同一个变量。  
  当改变其中一个变量，另一个也随之改变  

常量对象
  一个被const修饰的对象 可以被修改
  ```
  const user = {
    name: 'wj'
  };
  user.age = 25;
  console.log(user.age) //25
  ```
  因为 const 仅仅修饰 user。在这里 user 始终存储的都是同一个对象的引用。引用的地址没有变，只是引用的对象被修改了。  
  但是user不能够赋值给其他变量

  ## 复制合并 Object.assign
  语法：Object.assign(dest[,src1,src2...,srcn])
  参数 dest 和 src1, ..., srcN（可以有很多个）是对象。  
  这个方法复制了 src1, ..., srcN 的所有对象到 dest。换句话说，从第二个参数开始，所有对象的属性都复制给了第一个参数对象，然后返回 dest。  

  ```
  let user = {name:'wj'}
  let src1 = {age:'18'}
  let src2 = {sex:'男'}
  Object.assign(user,src1,src2)
  console.log(user)
  ```
  如果接收的对象有相同的属性名，则前面的会被覆盖。  

  