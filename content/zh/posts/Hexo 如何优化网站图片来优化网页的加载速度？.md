---
title: "Hexo 如何优化网站图片来优化网页的加载速度？"
description: "Hexo 可通过 WebP 格式压缩图片减少加载时间，并使用 Lazyload 懒加载技术，仅在图片可见时加载，从而优化网页性能并提升访问速度。"
summary: "Hexo 可通过 WebP 格式压缩图片减少加载时间，并使用 Lazyload 懒加载技术，仅在图片可见时加载，从而优化网页性能并提升访问速度。"
date: 2022-09-17T20:27:00+08:00
draft: false
slug: "5"

tags: ["教程", "软件", "Hexo"]

categories: ["教程"]
---

网站上加载时间最多的一般都是网页上的图片，有没有办法来优化图片加载速度以此达到优化网页加载速度的目的呢？

办法很简单，只需要将网站上的图片转为 WebP 格式存储或上传至图床即可。

# WebP

根据[维基百科的信息](https://zh.wikipedia.org/zh-cn/WebP)，WebP 是一种同时提供了有损压缩与无损压缩（可逆压缩）的图片文件格式，WebP的设计目标是在减少文件大小的同时，达到和JPEG、PNG、GIF格式相同的图片质量，并希望借此能够减少图片档在网络上的发送时间。

根据[知乎用户「smallpdf」的信息](https://zhuanlan.zhihu.com/p/440367551), WebP 是一种新的图像格式，用于 web 项目，可以大大提高网站访问速度。同样的分辨率，大小比 jpg、png 小 25% 以上。Chrome、Firefox、Edge、Opera 等都支持此格式。

看起来还不错，对吧？现在咱们就在网页上用上他。

这里的操作其实不是很难，只要将你原本网页上的别的格式的图片都转为 WebP就可以了。

~~虽然有些浏览器还未支持 WebP，不过不用担心，反正你博客也不一定有人看。~~

# Lazyload 懒加载

根据[维基百科的信息](https://zh.wikipedia.org/zh-cn/%E6%83%B0%E6%80%A7%E8%BC%89%E5%85%A5)，惰性加载，又称延迟加载、懒加载、无限滚动、瀑布流，是一种设计模式，被运用在软件设计和网页设计当中，对于网页界面，其特征为用户透过鼠标或触控，滚动浏览页面，直到页面下方时，才会依照Javascript等代码，发出连线请求，自动下载加载更多内容于同一网页，以减少网络带宽与设备负担。

简单来讲，就是你的界面划到哪里图片就加载到哪里，没划到的地方就不加载图片。这样就可以避免进入界面的时候将图片都加载完，要等待许久。

首先安装 [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image),
```
npm install hexo-lazyload-image --save
```
完成之后打开 _config.yml，添加如下配置。
```yml
lazyload:
  enable: true
  onlypost: false        # 可选
  loadingImg:            # 可选
  isSPA: false           # 可选
  preloadRatio: 1        # 可选
```
以下翻译由 Google 翻译~~强力驱动~~

**onlypost**

选择需要懒加载图片的范围

* 如果为 True，则只有来自帖子或页面的图像将启用懒加载。
* 如果为 False，则你网站的所有图片都将使用懒加载，包括来自你主题的图像，但不包括来自 CSS 样式的背景图像。

**loadingImg**

选择由懒加载切换到正常显示时的动画

* 如果想自定义动画，则在此输入动画的路径，如`/images/loading.gif`，具体请根据自己的情况来。
* 如果不想自定义，则留空（默认值），会采用默认的动画。

**isSPA**

出于性能考虑，添加了 isSPA。如果您的主题是 SPA 页面，请将其设置为 true 以使懒加载正常工作

* 如果为 true，则在滚动期间搜索每个图像以支持 SPA 页面
* 如果为 false（默认值），则性能最佳。

**preloadRatio**

此选项是为了更好的体验，默认值为 1。此比例表示预加载与当前屏幕尺寸相比在多少比例范围内的图像，即使这些图像不在当前视点内。

示例效果，来自作者。

![](https://s2.loli.net/2022/09/17/B8hWXI37oz1RfZF.gif)
