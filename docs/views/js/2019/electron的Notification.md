---
title: electron的Notification问题
date: 2019-09-09
# 标签
tags:
 - electron
#  文章目录
categories:
 -  electron-vue
---
<!--  -->



## 问题

  在electron的系统通知踩了坑，记录一下。


## 前提

 首先在pc端，想要electron自带的系统通知可以使用，要先注入appId。

 否则程序不会报错，通知也不会生效。

 在main.js中注入appId

 ```
 import pkg from '../../package.json'
 const electron require('electron')
 const {app} = electron
 // 判断是否是windos电脑
 if(process.platform === 'win32') {
     app.setAppUserModelId(pkg.build.appId)
 }
 ```
 在windos下需要注入，mac下好像没问题，没mac，没测试过。
 
 注： 程序需要安装之后才会生效，安装之后跑dev,等环境下通知正常显示。

## Notification

官方文档demo

 ```
  let myNotification = new Notification('标题', {
  body: '通知正文内容'
})

myNotification.onclick = () => {
  console.log('通知被点击')
}
```
如果不能正常显示，可以尝试

```

 let myNotification = new window.Notification('标题', {
  body: '通知正文内容'
})

myNotification.onclick = () => {
  console.log('通知被点击')
}

```
配置参数参考文档：`https://electronjs.org/docs/api/notification`  
注：一定要注意格式是否正确，标题不能和其他的参数放在一起，不能添加文档中没有的配置参数  
 否则在win7中可能会有bug，

## 添加点击事件

 在pc端应用最小化，点击系统通知唤醒pc端应用。

 ```
 const { ipcRenderer } = require('electron')

 ipcRenderer.send('mainRestoreWindow')

 ```
 mainRestoreWindow是定义在main.js中的方法，  
 我们只需要在点击的时候调用方法即可

 mainRestoreWindow函数

 ```
// 唤起窗口
let ipcWindow = () => {
  ipcMain.on('mainRestoreWindow', () => {
    if (!mainWindow) {
      createWindow()
    } else {
      mainWindow.show()
      mainWindow.focus()
    }
  })
}

app.on('ready', () => {
  // 获取单实例锁
  const gotTheLock = app.requestSingleInstanceLock()
  if (!gotTheLock) {
    // 如果获取失败，说明已经有实例在运行了，直接退出
    app.quit()
  }
  ipcWindow()
})
```
部分关键代码

## 全局方法

 在vue中，如果我们想要在js中使用vue中的methods的方法  

 我们可以在mounted中把方法变成全局方法，但是要慎重使用。项目过大，

 容易造成全局污染

```
mounted () {
     window.openLeftNews = this.showSubstanceLeft
}
```

## html5的notification

 html5在目前也是支持系统通知的

 ```
 if (!('Notification' in window)) {
        return Notification(config)
    } else if (Notification.permission === 'granted') {
      // 检查是否同意接受通知
      new window.Notification(config.title, notificationOption).onclick = config.onClick
    } else if (Notification.permission !== 'denied') {
      // 向用户获取权限
      window.Notification.requestPermission(permission => {
        if (permission === 'granted') {
          // 用户同意
          new window.Notification(config.title, notificationOption).onclick = config.onClick
        } else {
          Notification.closeAll()
        }
      })
    }
```