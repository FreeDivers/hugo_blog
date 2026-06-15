---
title: "Enable the Everything Plugin in PowerToys Run"
description: "Connect PowerToys Run with the Everything plugin to enable fast NTFS-based filename search from the launcher."
summary: "Connect PowerToys Run with the Everything plugin to enable fast NTFS-based filename search from the launcher."
date: 2022-08-23T20:43:00+08:00
draft: false
slug: "1"
tags:
  - Software
  - Windows
categories:
  - Tutorials
---
[PowerToys](https://github.com/microsoft/PowerToys) is an open-source toolkit developed by Microsoft and the community. PowerToys Run is one of its features. It works a bit like Spotlight on macOS: fast search plus many plugins. The problem is that file search relies on Windows indexing, which is slow to build and not always that fast in practice. [Everything](https://www.voidtools.com/) solves this by using NTFS internals for speed. So how do we use Everything inside PowerToys Run?

# How Everything Works
Answer from Zhihu user [骁龙800](https://www.zhihu.com/question/22862246/answer/23020795)

> Everything is a tool I depend on heavily. Let me explain quickly. Everything and Windows Search are different in a few ways:
>
> 1. Everything only searches file and folder names; Windows Search can also search file contents.
> 2. Everything only supports NTFS file systems; Windows Search supports multiple file systems (for example FAT32, exFAT, NTFS).
>
> Sometimes all we need is super-fast filename search. So how does Everything do it? First, two NTFS features: MFT and the USN journal.
>
> #### Master File Table (MFT)
> In NTFS, there is a special table called MFT. All file and folder names are stored there. Access is very fast, so applications can get names and paths on a volume without scanning the whole file system.
>
> #### USN journal
> NTFS also has a journaling feature. File-system changes are recorded in a journal file. When Everything starts, it scans MFT on all NTFS volumes and builds an index database optimized for string lookup. During runtime, it monitors the USN journal and updates the index when files change. When users search, Everything looks up results directly from this index.

# Install the Everything Plugin for PowerToys Run
To enable this plugin, first install [Everything](https://www.voidtools.com/) and make sure it is running. The plugin depends on it. Don't worry, it uses very little system resource.

Then download [EverythingPowerToys](https://github.com/lin-ycv/EverythingPowerToys) from GitHub and extract it to:
>C:\Program Files\PowerToys\modules\launcher\Plugins

Restart PowerToys. Open the PowerToys Run settings, enable "Everything Search", and disable "Windows Search". Then press the hotkey to open PowerToys Run, and it should work.

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316835676a7769396c39646a33306e683066793130652e6a7067.jpg)
