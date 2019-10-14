---
title: photoswipe放大图片的使用
date: 2019-10-14
# 标签
tags:
 - photoswipe
#  文章目录
categories:
 -  js
---
<!--  -->

 ## 简介
    
    官网地址： https://photoswipe.com/

    一款可以可以放大图片的插件。操作简单

 ## 引入依赖包

    npm install photoswipe

 ## 使用
    
```
const PhotoSwipe = require('photoswipe')
const PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default')
require('photoswipe/dist/photoswipe.css')
require('photoswipe/dist/default-skin/default-skin.css')
``` 
引入相关样式和api  

```
<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>
```
引入相关dom节点，只需要再你需要的页面引入即可，不会影响页面的结构  

在js操作中获取图片的dom节点，给图片添加点击事件。
```
var pswpElement = document.querySelectorAll('.pswp')[0]; //上面添加的dom节点

var items = [
    {
        src: 'https://placekitten.com/600/400',//获取图片的src
        w: 600, // 原始大小
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200, // 放大后的大小
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
```
官网demo地址：https://photoswipe.com/documentation/getting-started.html  

当我们获取到的是图片数组时，在vue中不能直接遍历dom，需要转换一下。
```
let img = pswpElement.getElementsByTagName('img')
let arr1 = [].slice.call(img) //转化获取的dom节点数组
arr1.forEach((item) => {
    item.addEventListener('click', e => {
    this.openPhotoSwipe(e) //调用上面的js函数 传入节点获取src
    })
})
```