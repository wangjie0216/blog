---
title: js的基本操作
date: 2019-07-31
# 标签
tags:
 - js基础
#  文章目录
categories:
 -  js
---
<!--  -->


<!-- 在文章内容部分显示标题  直接使用二级标题和三级标题侧边栏自动添加目录 -->
<!-- [[toc]] -->

## 正则替换全局选中的标签

```
var str = '你好世界,helloworld，你好。'
var newStr=str.replace(/你好/g,"<br/>")//g全局替换
console.log(newStr)//打印出：<br/>世界,helloworld，<br/>。
```

## 输入参数名称，从url获取参数值
```
  function getQueryString(name) {
    let reg = `(^|&)${name}=([^&]*)(&|$)`
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
  }
```
注：hash路由会获取失败。

## 判断是否是安卓app,ios,微信等

```
const ua = window.navigator.userAgent;
const env = {
    isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isWeixin: !!ua.match(/MicroMessenger/i),
  };
```
## 在字符串中指定位置添加指定字符。

```
function insertStr(soure, start, newStr){
          return soure.slice(0, start) + newStr + soure.slice(start);
},
var str = '20190731'
console.log(inserStr(inserStr(str,4,"."),7,"."))
//打印出2019.07.31
```
## 函数防抖

 应用场景：防止多次提交，只执行最后一次的提交

 简化版代码
 ```
 const debounce = (fn,delay) =>{
   let timer = null;
   return (...args) =>{
     clearTimeout(timer);
     timer = setTimeout(()=>{
       fn.apply(this,args)
     },delay)
   }
 }
 ```
## 函数节流

应用场景：在一个时间段内，只触发一次函数

简化版代码：
```
const throttle = (fn,delay=500) =>{
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(()=>{
      fn.apply(this,args);
      flag = true;
    },delay)
  }
}
```