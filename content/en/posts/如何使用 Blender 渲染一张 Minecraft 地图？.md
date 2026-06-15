---
title: "How to Render a Minecraft World with Blender"
description: "Export Minecraft worlds from Mineways into Blender, configure materials, lighting, skyboxes, and cameras, then render high-quality scene images."
summary: "Export Minecraft worlds from Mineways into Blender, configure materials, lighting, skyboxes, and cameras, then render high-quality scene images."
date: 2022-12-28T11:30:00+08:00
draft: false
slug: "6"
tags:
  - Blender
  - Minecraft
  - Gaming
  - Rendering
categories:
  - Tutorials
---

Once you learn this, you do not need in-game shaders just for screenshots. I originally followed this [article](https://blog.phoenixlzx.com/2017/12/18/minecraft-3d-render-with-blender/). It worked, but some parts felt unclear in practice, so I wrote this beginner-friendly guide.

# Preparation

## Required Files
- Install [Blender](https://mirrors.aliyun.com/blender/release/Blender3.4/blender-3.4.0-windows-x64.msi).
- Download [Mineways](https://erich.realtimerendering.com/minecraft/public/mineways/mineways.zip).
- Download [MCPrep](https://chitanta-my.sharepoint.com/:u:/g/personal/misakamikoto_chitanta_onmicrosoft_com/ERrDEc22ZwlDmeW-D220IDwB__-HWsrBEreNl0uGo6Pzhw?e=r0tTda).
- Prepare map, textures, player skin, and other assets.

## Export Map to OBJ
Download and unzip Mineways, then open it.

At top-left, choose `File > Open World > Find Your World` and open your save.

Drag with left mouse and define region with right mouse. `Height` and `Depth` set top and bottom bounds. Selected area is shown in purple. If the main area is incomplete, adjust `Height` and `Depth`.

Do not set `Depth` too small, or unwanted lower blocks may be included.

![](https://s2.loli.net/2022/12/28/yGF8U9kcbOh2viJ.png)

Then press `Ctrl + R` to export the selected region as OBJ.

In the next dialog, you can usually click `OK`. If needed, adjust parameters according to your situation.

![](https://s2.loli.net/2022/12/28/zGxsmCBleVXIiYH.png)

## Blender Rendering
Open Blender and render the file you just exported.

![](https://s2.loli.net/2022/12/28/7MneWAdYuQTwcvh.png)

Click "General".

### Set Interface Language (Optional)

Open Preferences here:

![](https://s2.loli.net/2022/12/28/FO641EU3P5jZlJI.png)

You can find the `Language` option on the right.

### Install MCPrep
Still in Preferences, click `Add-ons`, then `Install`, locate the downloaded MCPrep package, and click install.

![](https://s2.loli.net/2022/12/28/tCMLfVHn3mIAcXv.png)

After installation, search `MCPrep` and check whether it is enabled.

![](https://s2.loli.net/2022/12/28/69olvI5FTwEZdUR.png)

### Rendering Workflow

Press `Shift + F5` to return to the main interface, then delete the three default objects on the right.

![](https://s2.loli.net/2022/12/28/VkRZfxwi8AyKLv6.png)

Then choose `File > Import > Wavefront(.obj)` and import your file.

![](https://s2.loli.net/2022/12/28/xzmH1gLYkPfVTWE.png)

After import, open the small triangle panel on the right and switch to the `MCPrep` tab.

![](https://s2.loli.net/2022/12/28/Zr6mAqLoHTgV1FS.png)

Select the imported model, click `Prep Materials`, choose `Reflective` or `SEUS`, then click `OK`. You should now see a textured model.

![](https://s2.loli.net/2022/12/28/pPXoG97B6rSlEFC.png)

Now add sky and light: click `Create MC Sky` in MCPrep, then click `OK`.

![](https://s2.loli.net/2022/12/28/NjYKt6HXTykiaMb.png)

After creating sky, a `Time of Day` control appears below, where you can adjust lighting time.

Next add a camera: `Add > Camera`.

At first it may be hard to find the camera location, so switch to camera view from the right panel.

![](https://s2.loli.net/2022/12/28/Qp48FfSxW7kUzlJ.png)

Whatever the camera sees is what gets rendered. Adjust camera position, rotation, and scale from the right panel.

Select the camera first, then adjust values under `Object Properties` until satisfied. Keeping camera view enabled helps.

![](https://s2.loli.net/2022/12/28/CMGSYoZE5T1nQ2f.png)

If image size is not ideal, adjust resolution under `Output Properties`. You can scale width and height proportionally for clearer output (with longer render time).

![](https://s2.loli.net/2022/12/28/GfQ6DIYLaxXcw2o.png)

Then tune rendering settings in `Render Properties`. Different engines have different effects, so try them.

![](https://s2.loli.net/2022/12/28/6JAiTvsz9lNPSmB.png)

Finally click `Render > Render Image`. Wait a moment and your render is ready. Do not forget `Image > Save`.

![](https://s2.loli.net/2022/12/28/xrT1OvYmhNWSiLy.png)

Now go share your image with friends.
