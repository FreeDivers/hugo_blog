---
title: "在浏览器尝试不同于用户脚本 UserScript 的用户样式 UserStyle"
description: "Stylus 可修改网页 CSS，个性化外观。类似 Tampermonkey，但控制用户样式，支持安装、管理、自定义编写，优化浏览体验。"
summary: "Stylus 可修改网页 CSS，个性化外观。类似 Tampermonkey，但控制用户样式，支持安装、管理、自定义编写，优化浏览体验。"
date: 2022-09-10T10:35:00+08:00
draft: false
slug: "4"

tags: ["教程", "插件"]

categories: ["教程"]
---

# 介绍
一个网页，通常会由以下三个构成部分组成，分别是：
* 结构（HTML）：用于描述页面的结构
* 表现（CSS）：用于控制页面中元素的样式
* 行为（JavaScript）：用于响应用户操作

简单来讲，CSS控制着网页的外观布局等方面，JavaScript控制着网页的行为功能等方面，HTML用来定义网页的内容。

所以说，更改 CSS，就可以给网页更换主题，修改网页的外观。

我们所熟知的「油猴脚本」，则是通过脚本的方式来控制 JavaScript，为网页添加功能。

那么既然 JavaScript 可以更改，CSS也是可以更改的。

现在介绍可以修改网页上 CSS 的插件 [Stylus](https://github.com/openstyles/stylus)。

>下载地址
>
>[Chrome网上应用店](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
>
>Edge外接程序(作者看了一下，发现好像Edge并没有上架这个插件)
> 
> [Firefox扩展](https://addons.mozilla.org/firefox/addon/styl-us/)

# 概览
Stylus 的整体使用方法和 Tampermonkey 大同小异，只不过一个是控制用户样式，一个是控制用户脚本。

如果你在上一步成功安装成功，你应该可以在扩展栏看到它的身影。

![](https://s2.loli.net/2025/01/27/fOy26iz9HUl4B1T.jpg)

点击右下角的齿轮图标，进入 Stylus 的选项界面，可以在此处对 Stylus 进行一定的自定义设置。

![](https://s2.loli.net/2025/01/27/jRXQ9P47KlGShWF.jpg)

右上角关闭窗口，可以在这里管理已经安装的样式。

![](https://s2.loli.net/2025/01/27/jS4sH6iYKdXGcIr.jpg)

# 安装样式
在 Stylus 安装样式很简单，和 Tampermonkey 一样，找到适用于网页的样式，安装即可。

你可以在 [Github](https://github.com) 中搜索用户样式，有些样式会转移到 Github 上更新。

你也可以在专门搜集用户样式的网站上搜索用户样式：
>[USO](https://userstyles.org/)
>
>[UserStyles.world](https://userstyles.world/)
>
>小声说一句，因为大家平时对用户样式的关注度没有用户脚本的关注度大，所以大部分插件更新时间都稍微有些久远。

Stylus 有一个十分方便的功能，只需要点击它的扩展菜单，再点击「查找更多样式」，就可以直接在弹出菜单查找可以应用在当前网页的样式，不用再去打开网页再查找样式。

![](https://s2.loli.net/2025/01/27/SePE6QZ7iAnXMRw.jpg)

# 使用样式
样式的使用很简单，一般来讲只需要安装之后重新刷新网页就可以看到样式生效。

如果你的样式可以自定义的话，点击 Stylus 的图标，再点击样式旁的齿轮，就可以修改当前样式的自定义配置。

# 编写样式
如果你学习过 CSS 等方面的内容的话，则可以自行编写样式，Stylus 为其提供了支持，只要在样式管理的界面点击「新建样式」，即可自行编写。

![](https://s2.loli.net/2025/01/27/VCOocgPArvfMSHW.jpg)

# 展示
![](https://s2.loli.net/2025/01/27/LIAT5nQPGJcmiwt.jpg)
