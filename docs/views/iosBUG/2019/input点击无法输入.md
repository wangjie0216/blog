---
title: input在ios上点击无法输入内容
date: 2019-07-15
# 标签
tags:
 - ios兼容
#  文章目录
categories:
 -  日常bug处理
---

## 前因
  在做h5页面的时候，突然发现原生input在ios的设备上点击没有光标，

  并且内容也无法输入。

  随后百度一波。
  
  原来很多人都遇到过这个问题。
  
## 解决方案
  
  只需要在input的css样式加上

   ```
   -webkit-user-select: auto;

   或者
   
   -webkit-user-select:text !important;

   ```

