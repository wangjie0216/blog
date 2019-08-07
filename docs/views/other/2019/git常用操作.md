---
title: git常用操作
date: 2019-08-07
# 标签
tags:
 - git
#  文章目录
categories:
 -  git
---


## 安装

  windows安装git,可以直接到git官网安装[下载地址](https://git-scm.com/downloads "git"),
  国外的网站下载速度可能有点慢。  
  下载安装完成，鼠标右击出现 Git Bash ,点击打开出现命令框说明安装成功。

## 绑定账户
  git config --global user.name "你的账户名称"
  
  git config --global user.email "你的绑定邮箱账号"

## 常用命令行

   git init //把当前目录变成git可管理的仓库

   git add <文件名> //单个文件添加到仓库

   git add . //把所有文件添加到仓库，常用命令

   git commit -m "提交描述内容" //告诉git ,把内容提交到暂缓区，常用命令

   git push origin master //提交内容到仓库，master是主分支名，如何提交到不同的分支修改master分支名即可，常用命令

   git status //查看状态，可以看出那些文件被修改

## 版本回退

  git log //查看提交日志 显示的commit 后面一串编码是提交的id,每次commit 都会生成。
  
  git reset --hard  id //撤回版本，id是commit的id,用于撤回哪一个版本。id可以是前几位，但是位数不能过短。

  git reflog //打印出所有的提交记录

## 撤销修改

   git checkout --file // file是文件名，必须加上--否则变成了切换分支，撤销该分支的修改

## 和远程库建立关系

   git remote add origin https://github.com/0216/blog.git 
   //和远程库建立联系,origin是远程分支的名称

   git push -u origin master
   //第一次推送加上-u,会把本地的分支和远程分支建立联系，以后只用git push origin master就可以了

## 克隆代码

   git clone -b origin https://github.com/0216/blog.git 
   // origin 是分支名称，后面是仓库地址，如果有权限或者开源就可以成功拉取

## 分支
   git branch //查看当前分支名称

   git branch dev //创建一个叫dev的分支

   git checkout dev //切换当前分支到dev分支

   git checkout -b dev //创建dev分支并切换分支到dev

   git branch -d dev //删除dev分支

   git branch -D dev //强行删除dev分支

   git merge dev //合并dev分支的代码到本分支


