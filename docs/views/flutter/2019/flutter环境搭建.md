---
title: flutter环境搭建
date: 2019-08-15
# 标签
tags:
 - flutter
#  文章目录
categories:
 -  flutter
---
<!--  -->


<!-- 在文章内容部分显示标题  直接使用二级标题和三级标题侧边栏自动添加目录 -->
<!-- [[toc]] -->

## 下载java的sdk

  下载地址：`https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html`  
  然后一步步安装，在命令行里输入java,可以显示很多命令解释，则说明安装成功  

  

## 下载flutter的sdk
   到官网下载稳定版的sdk,地址是：`https://flutter.dev/docs/development/tools/sdk/releases#windows` 
   可能会有变动，变动则网上搜索，下载好，然后解压到自己想放的文件夹中  
   然后再flutter文件下找到，flutter_console.bat,打开就可以运行flutter  
   如果想要在任何位置都可以运行flutter,那么还需要配置环境变量  
   我的电脑---属性--高级系统设置--环境变量  
   把D:\flutter\flutter_windows_v1.7.8+hotfix.4-stable\flutter\bin，放在path下面保存就可以了  
   打开命令行，输入flutter,看到很多命令行的解释就说明成功了
   然后进行flutter doctor的测试，此时你会看到一些X,说明有些内容还没有安装。接下来安装android studio

## 安装android studio

   到官网下载地址是：`https://developer.android.com/`
   然后一步一步安装，打开，file--plugins,搜索flutter,
   这个时候可能你搜索不到任何插件  
   然后file--setting--appearance--systemSettings--updates  
   把use secure connection的勾选去掉
   然后再点到 http proxy查看代理选择no proxy然后保存
   之后再取搜索插件，当然网络不好可能会影响搜索。
   搜索之后然后下载flutter。

## 虚拟机的安装

  原本想使用android studio的虚拟机，奈何一直运行不起来，  
  感觉可能是公司电脑的内存太小无法运行，于是安装了一个夜神安卓模拟器
  首选我们需要在android studio上安装android的sdk  
  file--setting--appearance--systemsetting--android sdk
  然后安装，然后配置环境变量  
  C:\Users\Administrator\AppData\Local\Android\Sdk\platform-tools  
  C:\Users\Administrator\AppData\Local\Android\Sdk\tools
  然后配置到path下去，打开名令行，输入adb version,如果成功打印版本则说明添加成功  
  否侧查看自己的环境变量配置，重新添加，路径是否正确。

  打开夜神模拟器的安装位置，直到文件bin,然后把路径添加到环境变量中：
  例如：D:\模拟器\Nox\bin

## vscode下载flutter插件
   打开vscode，下载flutter插件，成功下载，然后flutter creater <文件名>  
   成功创建文件，然后flutter run   
   这时会提示没有设备

   连接夜神模拟器，首先打开夜神模拟器，在命令行中输入adb connect 127.0.0.1:62001  
   正常情况下就可以成功连接，然后在vscode右下角可以成功看到设备名称。
   运行flutter run ,此时会看到很多的报错。
   首先输入命令 flutter doctor   
   查看有没有X，如果证书有问题 ，就重新安装证书输入命令：flutter doctor --android-licenses  
   一路y即可，
   然后fluuter run 可以看到一篇红，修改项目下android - gradle -build.gradle文件
  ```
  buildscript {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2'
    }
}

allprojects {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }
}
```
然后找到flutter的flutter.gradle文件：D:\flutter\flutter_windows_v1.7.8+hotfix.4-stable\flutter\packages\flutter_tools\gradle
```
buildscript {
    repositories {
        //google()
        //jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2'
    }
}
```
主要是修改代理：
```
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
```
还有可能用了阿里云的依然会报错，又可能是使用的gradle的版本较高，阿里云的不能及时更新，这时候我们要降低一下gradle的版本  
找到flutter的flutter.gradle和build.gradle的
```
dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2'
    }
```
更改相应的版本号，保存，然后再运行。
如果一顿操作之后依然运行不了，这个时候要flutter doctor一下看看有没有X,
安卓的证书有可能失效会导致一直运行不起来，重装即可。

运行起来，打开夜神模拟器，然后就可以看到了。