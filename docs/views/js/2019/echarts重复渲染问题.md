---
title: echarts重复渲染数据残留问题
date: 2019-10-08
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

# echarts

  ## 问题
  使用echarts的时候，切换柱状图，然后后者继承的前者的一些数据和样式。

  ## 方案
  切换先清除画布再进行渲染
  ```
  // 清除画布，防止切换数据残留
  myChart.clear()
  // 绘制图表
  myChart.setOption(option, true)
  ```
  option就是一些配置项和数组，自行参考文档即可。


