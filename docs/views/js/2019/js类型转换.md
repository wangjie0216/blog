---
title: js类型转换
date: 2019-09-17
# 标签
tags:
 - js基础
#  文章目录
categories:
 -  js
---


# 类型转换

  ## ToString

  当需要一个值的字符串形式，就需要进行string 类型转换。

  ```
  let value = true ; //boolean
  value = String(value)
  console.log(typeof value) // string
  ```
  ## ToNumber
  
  在算术函数和表达式中，会自动进行number类型转换  
  例如：
  ```
  console.log('6' / '2') // 3 
  ```
  也可以使用Number(value) 转换为number的类型
  ```
  let value = '123'
  console.log(typeof value) // string
  let num = Number(value)
  console.log(typeof num) // number
  ```
  当我们转换的类型不是一个有效的数字时，转换结果会变成NaN  
  Number类型转换规则：  
| 输入           | 输出       |
| ------------- |:----------:|
| undefined     | NaN        |
| null          |  0         |
| true 和 false | 1 和 0      |
| string        | 去掉首尾空格后的纯数字字符串中含有的数字。如果去掉空格后的字符串只有空格字符组成，返回 0。如果字符串不是纯数字，则返回 NaN。|

  +号问题  
  几乎所有的算术运算符都将值转换为数字，然而 + 号是个例外  
  如果其中一个运算元是字符串，另一个也会转化成字符串   
  ```
  console.log( 1 + '2') //'12'
  console.log( '1' + 2) // '12'
  ```
  仅发生在其中一个是字符串的情况下。

  ## ToBoolean 
  转换规则：
  0，空字符串，null,undefind , NaN都转化为false  
  其他值都为true
  ```
  console.log(Boolean('0')) // true
  console.log(Boolean(' ')) // true 空也是true
  console.log(Boolean(''))  // false
  ```


  ```
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
```