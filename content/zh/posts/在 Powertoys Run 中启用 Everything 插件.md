---
title: "在 Powertoys Run 中启用 Everything 插件"
description: "PowerToys Run 结合 Everything 插件，利用 NTFS 特性快速搜索文件，需安装插件并配置路径即可启用。"
summary: "PowerToys Run 结合 Everything 插件，利用 NTFS 特性快速搜索文件，需安装插件并配置路径即可启用。"
date: 2022-08-23T20:43:00+08:00
draft: false
slug: "1"

tags: ["软件", "Windows"]

categories: ["教程"]
---

[Powertoys](https://github.com/microsoft/PowerToys) 是一款由微软和社区共同开发的开源的软件，Powertoys Run 便是其中的一个功能，它的作用类似于 Mac OS 上的「聚焦搜索」，在可以快速搜索文件的同时也有许多插件可以使用。但是搜索文件时依赖的是 Windows 中的「索引」，这东西不仅建立慢而且搜索速度也不见得会加快多少。[Everything](https://www.voidtools.com/) 的出现就可以利用 NTFS 格式的特性来快速搜索。那要怎么样才可以在 Powertoys Run 中使用 Everything 呢？

# Everything工作原理
来自知乎用户「骁龙800」的[回答](https://www.zhihu.com/question/22862246/answer/23020795)

>Everything是我严重依赖的一个软件，来答一答。Everything和Windows搜索是有区别的，以下列几点：
>
>1. Everything只能搜索文件名和文件夹名，Windows搜索可以搜索文件名和文件内容
>2. Everything只能搜索NTFS格式的文件系统，Windows搜索可以搜索任意文件系统（例如FAT32，exFAT，NTFS）
>
>但有时我们需要的恰好就是快速搜索文件名，那么Everything的工作原理是如何呢？ 先简单介绍一下NTFS的两个功能，MFT和USN journal。
>#### Master File Table (MTF)
>在NTFS文件系统中，有一个特殊的表，称为MTF表。所有文件夹和文件的名称都被存储在该表中，访问该表的速度非常快，使应用程序可以不遍历文件系统就能获取当前卷（磁盘）中的所有文件的名称和路径。
>
>#### USN journal
>NTFS还有一个日志功能。所有对文件系统有修改的操作都被记录在了一个journal日志文件中。Everything的原理程序启动时，扫描系统所有NTFS卷（磁盘）的MTF表，将文件名称以一种利于字符串检索的算法形式存储在Everything的index索引数据库中。系统运行过程中，Everything还会监控NTFS卷的journal日志文件，如果文件系统中的文件发生改变，Everything会更新它的index索引数据库。当用户搜索文件时，Everything利用字符串查找算法，在index索引数据库中查找，可以直接搜索到文件。
# 如何安装在 Powertoys Run 中启用 Everything 的插件
要启用这个插件，首先你需要先下载并安装好 [Everything](https://www.voidtools.com/)，并确保它处于开启状态，插件运行需要 Everything 开启状态。别担心，不会占用很多系统资源的。

接着，前往 Github 下载这款 [EverythingPowerToys](https://github.com/lin-ycv/EverythingPowerToys) 插件，将其解压至
>C:\Program Files\PowerToys\modules\launcher\Plugins

重启 Powertoys，打开 Powertoys Run 选项卡，将「Everything搜索」打开，并且关闭「Windows 搜索」，这时按下快捷键打开 Powertoys Run，可以看到已经生效了。

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316835676a7769396c39646a33306e683066793130652e6a7067.jpg)
