---
title: swiper在vue上使用for循环无法滚动的问题
date: 2019-07-22
# 标签
tags:
 - 移动端兼容
#  文章目录
categories:
 -  日常bug处理
---

## 前因

  用swiper插件进行轮播循环滚动，测试模拟数据时正常滚动，

  但使用for循环数据时，无法自己滚动，

  在循环下面添加假数据时，又可以自己滚动了。

  原因：在循环时，因为还没有

## 解决方案
  
   Vue.nextTick( [callback, context] )

   在dom循环更新之后再进行dom更新，在数据修改之后使用这个方法修改dom。

   ```
   // 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })
```
把创建一个swiper放在nextTick里面进行创建，可以解决这个不滚动的问题

```
this.$nextTick(function(){
     new Swiper('.swiper-container',{
        direction: 'vertical',
        slidesPerView: 2,
        loop : true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          }
        });
})
```
## 又遇新问题

  当我重新插入数据时，swiper的滚动会在新插入的数据节点胡乱滚动，

## 新的解决方案

  每次插入数据，重新删除所有的swiper的dom节点，然后重新创建swiper.

  ```
  <div class="message_content swiper-container" v-if="swiper">
              <div class="swiper-wrapper">
                <template >
                  <div class="swiper-slide" v-for="(item,index) in commentData" :key="index">
                      <div class="img_name"><span class="photo"><img :src="item.avatar"></span><span class="name">{{item.nickname}}</span></div>
                      <div class="message_text">{{item.content}}</div>
                  </div>
                </template>
              </div>
    </div>
   ```
   主要时v-if="swiper"的判断。
   
   删除后重新创建，可以正常滚动。

   关于swiper,遇到的问题，记录在此。
