---
title: "Try UserStyle in Your Browser: A Different Path from UserScript"
description: "Use Stylus to customize website CSS from the browser, manage user styles, and personalize page appearance without writing user scripts."
summary: "Use Stylus to customize website CSS from the browser, manage user styles, and personalize page appearance without writing user scripts."
date: 2022-09-10T10:35:00+08:00
draft: false
slug: "4"
tags:
  - Plugin
categories:
  - Tutorials
---

# Introduction
A webpage is usually built from three parts:
* Structure (HTML): defines page structure.
* Presentation (CSS): controls visual style.
* Behavior (JavaScript): handles interactions.

In simple terms, CSS controls appearance and layout, JavaScript controls behavior and functionality, and HTML defines the content.

So by changing CSS, you can change themes and webpage appearance.

The user scripts we often use (for example Tampermonkey scripts) mainly modify JavaScript behavior to add features.

If JavaScript can be changed, CSS can be changed too.

Here is a plugin for changing CSS on webpages: [Stylus](https://github.com/openstyles/stylus).

> Download links
>
> [Chrome Web Store](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
>
> Edge Add-ons (I checked and it seemed unavailable on Edge at that time)
>
> [Firefox Extension](https://addons.mozilla.org/firefox/addon/styl-us/)

# Overview
Stylus works similarly to Tampermonkey overall. The difference is one controls user styles while the other controls user scripts.

If installation succeeds, you should see it in your extensions list.

![](https://s2.loli.net/2025/01/27/fOy26iz9HUl4B1T.jpg)

Click the gear icon at the bottom right to open Stylus settings and customize behavior.

![](https://s2.loli.net/2025/01/27/jRXQ9P47KlGShWF.jpg)

Click close at the top right to return; from there you can manage installed styles.

![](https://s2.loli.net/2025/01/27/jS4sH6iYKdXGcIr.jpg)

# Installing Styles
Installing styles in Stylus is easy. Just like Tampermonkey: find a style for your site and install it.

You can search user styles on [GitHub](https://github.com). Some styles are maintained there.

You can also search dedicated style collections:
>[USO](https://userstyles.org/)
>
>[UserStyles.world](https://userstyles.world/)
>
>A small note: user styles usually get less attention than user scripts, so many styles are updated less frequently.

Stylus also has a convenient feature: open its extension menu and click "Find styles" to search styles for the current site directly, without opening another website.

![](https://s2.loli.net/2025/01/27/SePE6QZ7iAnXMRw.jpg)

# Using Styles
Using styles is simple. In most cases, install the style and refresh the page.

If the style supports customization, click the Stylus icon and then the gear next to that style to edit its settings.

# Writing Styles
If you know CSS, you can write your own styles. Stylus supports this directly: open style management and click "Write new style".

![](https://s2.loli.net/2025/01/27/VCOocgPArvfMSHW.jpg)

# Showcase
![](https://s2.loli.net/2025/01/27/LIAT5nQPGJcmiwt.jpg)
