---
title: "如何使用 Blender 渲染一张 Minecraft 地图？"
description: "从 Mineways 选区导出 Minecraft 地图到 Blender，配置材质、光源、天空盒和摄像机，无需光影模组也能渲染高质量场景图。"
summary: "从 Mineways 选区导出 Minecraft 地图到 Blender，配置材质、光源、天空盒和摄像机，无需光影模组也能渲染高质量场景图。"
date: 2022-12-28T11:30:00+08:00
draft: false
slug: "6"

tags: ["Blender", "Minecraft", "游戏", "渲染"]

categories: ["教程"]
---

学会了就不用开光影截图了。一开始看到了这篇[文章](https://blog.phoenixlzx.com/2017/12/18/minecraft-3d-render-with-blender/)，虽然按照所讲述的方法确实成功了，不过自己亲身实践的时候感觉有些地方写的不大详细，因此打算在这篇文章的基础上写一篇更适合小白的文章。

# 准备工作

## 所需文件
- 安装 [Blender](https://mirrors.aliyun.com/blender/release/Blender3.4/blender-3.4.0-windows-x64.msi)。
- 下载 [Mineways](https://erich.realtimerendering.com/minecraft/public/mineways/mineways.zip)。
- 下载 [MCPrep](https://chitanta-my.sharepoint.com/:u:/g/personal/misakamikoto_chitanta_onmicrosoft_com/ERrDEc22ZwlDmeW-D220IDwB__-HWsrBEreNl0uGo6Pzhw?e=r0tTda)。
- 准备地图、材质、玩家皮肤等资源。

## 导出地图文件到obj
下载 Mineways，解压到一个地方，打开。

左上角「File > Open World > Find Your World」，打开你想要的存档。

接着左键拖动，右键选区，上方「Height」和「Depth」可以设置最高高度和最小高度。选中的地方软件会以紫色显示，如果没有选中完主体请调整「Height」和「Depth」。

「Depth」不要调的太小，不然会把底下的方块也一起选中了。

![](https://s2.loli.net/2022/12/28/yGF8U9kcbOh2viJ.png)

接着使用快捷键「Ctrl + R」，导出选中区域的的 obj 文件。

接下来的界面如果没有什么问题的话，可以直接点击「OK」继续。如果你想调整一些参数，也可以参照下面的中文翻译对照。

![](https://s2.loli.net/2022/12/28/zGxsmCBleVXIiYH.png)

## Blender 渲染
接下来打开 Blender 把刚刚的文件渲染。

![](https://s2.loli.net/2022/12/28/7MneWAdYuQTwcvh.png)

点击「常规」。

### 调整中文

打开位于这里的偏好设置。

![](https://s2.loli.net/2022/12/28/FO641EU3P5jZlJI.png)

进去右方就可以看到「Language」。

### 安装 MCPrep
还是在设置界面，点击「插件」，再点击「安装」，找到刚刚下载的 MCPrep，点击「安装插件」。

![](https://s2.loli.net/2022/12/28/tCMLfVHn3mIAcXv.png)

安装好后搜索一下 MCPrep 看看有没有被勾选。

![](https://s2.loli.net/2022/12/28/69olvI5FTwEZdUR.png)

### 渲染

使用快捷键「Shift + F5」回到原来的界面，然后在右侧把自带的三个物品删除。

![](https://s2.loli.net/2022/12/28/VkRZfxwi8AyKLv6.png)

完成后左上角「文件 > 导入 > Wavefront(.obj)」导入刚刚的文件。

![](https://s2.loli.net/2022/12/28/xzmH1gLYkPfVTWE.png)

导入后右侧有一个小三角，点开它后点开「MCPrep」选项卡。

![](https://s2.loli.net/2022/12/28/Zr6mAqLoHTgV1FS.png)

然后先选中导入的模型，随后点击「Prep Materials」，选择「高光」或「SEUS」，最后点击「确定」。你就可以看到一个有材质的模型了。

![](https://s2.loli.net/2022/12/28/pPXoG97B6rSlEFC.png)


现在我们需要给这个模型加上光和云，点击 MCPrep 的「Create MC Sky」，然后点击「确定」即可。

![](https://s2.loli.net/2022/12/28/NjYKt6HXTykiaMb.png)

创建之后下方会出现「Time of Day」，在这里就可以调整渲染时模型所处的时间。

接着我们需要添加一个摄像机，点击左上角「添加 > 摄像机」。

一开始可能会找不到摄像机的位置，所以我们需要切换到摄像机视角来确认。在右侧就可以切换到摄像机视角。

![](https://s2.loli.net/2022/12/28/Qp48FfSxW7kUzlJ.png)

摄像机所能看到的内容，最终渲染出来就是什么内容，所以我们要调整摄像机的位置，旋转和缩放等参数，在右侧就可以完成这些工作。

在右侧先选中摄像机，然后在下方的「物体属性」选项卡调整摄像机的参数到你满意的程度。在这个过程中我建议始终启用摄像机视角，以便方便的调整。

![](https://s2.loli.net/2022/12/28/CMGSYoZE5T1nQ2f.png)

如果对照片的大小不满意，可以在上方「输出属性」选项卡中调整分辨率。如果有需要的话，可以按照目前的分辨率宽高等比放大，这可以让渲染的结果更加清晰，当然相应的会增加渲染时间。

![](https://s2.loli.net/2022/12/28/GfQ6DIYLaxXcw2o.png)

接下来需要调整渲染的一些属性，在右边「渲染属性」选项卡中可以调整。三个渲染引擎分别有各自的渲染参数和效果，可以都试试。

![](https://s2.loli.net/2022/12/28/6JAiTvsz9lNPSmB.png)

最后，点击左上角「渲染 > 渲染图像」，稍等一下，一张渲染好的模型就有了。记得点击左上角「图像 > 保存」，保存好成果。

![](https://s2.loli.net/2022/12/28/xrT1OvYmhNWSiLy.png)

然后就可以拿着照片去和朋友们分享了。
