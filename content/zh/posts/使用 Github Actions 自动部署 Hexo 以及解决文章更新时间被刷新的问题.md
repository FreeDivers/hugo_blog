---
title: "使用 Github Actions 自动部署 Hexo 以及解决文章更新时间被刷新的问题"
description: "GitHub Actions 可自动部署 Hexo，需配置 Token 及远程仓库，并创建 workflow 文件实现自动化。为避免更新时间被重置，可手动或自动设置 updated 字段。"
summary: "GitHub Actions 可自动部署 Hexo，需配置 Token 及远程仓库，并创建 workflow 文件实现自动化。为避免更新时间被重置，可手动或自动设置 updated 字段。"
date: 2022-09-10T07:44:00+08:00
draft: false
slug: "3"

tags: ["Hexo", "GitHub"]

categories: ["教程"]
---

# 配置 Token
打开 [Github](https://github.com)，点击右上角头像，再点击「Settings」。

![](https://fultal.qinyan.org/68747470733a2f2f747661332e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696878773030696a3330376130683271346f2e6a7067.jpg)

下拉网页，点击「Developer settings」。

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696c696c6e79676a333163773073396b33342e6a7067.jpg)

点击「Personal access tokens」，再点击「Generate new token」

![](https://fultal.qinyan.org/68747470733a2f2f74766178312e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696e6c323668636a333171383132777162382e6a7067.jpg)

随便输入名字，将「Expiration」改为「No Expiration」,下方勾选「repo」和「workflow」，网页下滑点击「Generate token」。随后将生成的 Token 复制备用。


**请注意！Token 不会再次显示！作者强烈建议不要关闭生成 Token 的标签页！请等到自动部署成功后再关闭！**

**请不要将自己的 Token 外泄！除非你知道您泄露给的人值得您去信任** 

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631697670763568746a33307876306e6c31306c2e6a7067.jpg)

# 仓库配置
我们要让从本地推送上来的文件进入存放 Hexo 全部文件的仓库，再从这个仓库中部署 Hexo 至你的页面文件仓库。

新建一个仓库，名称任意，最好是有明显意义的名称，例如「Hexo_Blog_Source」。

仓库您可以设为「Public」或「Private」，您可以根据您自身博客的情况进行选择。在您的博客源文件下拥有一些私密数据的情况下就不要选择「Public」了。

![](https://fultal.qinyan.org/68747470733a2f2f74766178332e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a3739316d666d6a3330787630776f3765732e6a7067.jpg)

进入仓库界面，点击「Settings」，点击「Secrets」，点击「Actions」，点击「New repository secret」。

![](https://fultal.qinyan.org/68747470733a2f2f74766178342e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a3965633538366a333079783073323765762e6a7067.jpg)

名称填入「GH_TOKEN」，在下方填入我们刚刚生成的密钥，再点击「Add secret」。

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a636677396f706a333078763073326e34662e6a7067.jpg)

# Git 配置
打开本地的博客文件夹，右键打开终端。

![](https://fultal.qinyan.org/68747470733a2f2f74766178312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a6862316970306a33307570306e356b306d2e6a7067.jpg)

如果你没有初始化 Git 的话，请先初始化 Git。
```
git init
git branch -m main
```

接着连接到远程库
```
git remote add origin 你的远程库地址
```

远程库地址点击仓库上的「Code」，复制远程库地址。

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316f66677775626c6a333137613076743464692e6a7067.jpg)

在本地上新建一个文件夹，取名为「.github」，接着再在这个文件夹内新建一个文件夹，取名为「workflow」。在 workflow 文件夹内新建一个名为「autodeploy.yml」的文件。这是我们自动部署所运行的代码。

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316f6b636f6863356a33307570306e3537376e2e6a7067.jpg)

打开 autodeploy.yml，按照注释填入以下内容

```yml
name: 自动部署

on:
  push:
    branches:
      - main
  release:
    types:
      - published

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 检查分支
        uses: actions/checkout@v2
        with:
          ref: main

      - name: 安装 Node
        uses: actions/setup-node@v1
        with:
          node-version: '16.x'

      - name: 安装 Hexo
        run: |
          export TZ='Asia/Shanghai'
          npm install hexo-cli -g

      - name: 缓存 Hexo
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

      - name: 安装依赖
        if: steps.cache.outputs.cache-hit != 'true'
        run: |
          npm install --save

      - name: 生成静态文件
        run: |
          hexo clean && hexo generate -g -c 2

      - name: 部署到Github
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: ${{ secrets.GH_TOKEN }}
          repository-name: FreeDivers/FreeDivers.github.io #此处更改为你的仓库名称，格式为「用户名/用户名.github.io」
          branch: main  
          folder: public
          commit-message: '${{ github.event.head_commit.message }} Updated By Github Actions'
```

最后输入以下代码将其推送到仓库
```
git add .
git commit -m first_commit
git push origin main -u
```
如果没有问题的话，在仓库界面打开「Actions」就可以看到运行结果了
# 剔除不需要上传的文件
有些文件或文件夹你可能不需要一并上传到远程库，这样可以节省上传的时间和部署的时间。

打开博客源文件目录下的「.gitignore」，即可添加或去除不想上传的文件或者文件夹。
# 更新时间重置问题
在使用了这个自动部署之后，每篇博文的更新时间都会变成自动部署成功时的时间。因为博文的更新时间看的是博文中「Front-matter」部分中的「updated」中的时间。所以只要博客在写之前就定义好了 updated，文章更新时间就不会随着自动部署变化。

## 为以后的文章解决这个问题
打开`博客文件目录\scaffolds\post.md`

添加如下内容
```
date: {{ date }}
updated: {{ date }}
```
保存

之后只要新建博文的时候输入
```
hexo new post "标题名称"
```
就可以自动加上 updated 了。

## 为之前的文章解决这个问题
如果你已经自动部署过了，那么你只能手动去修改 updated。

如果没有，参见这位大佬的[文章](https://www.cnblogs.com/yyyzyyyz/p/15792199.html#:~:text=%E5%9C%A8%E9%83%A8%E7%BD%B2%E5%AE%8CGithub%20Action%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%AD%98%E5%9C%A8%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%EF%BC%8C%E6%AF%8F%E6%AC%A1%E6%9B%B4%E6%96%B0%E6%97%B6%EF%BC%8C%E7%94%B1%E4%BA%8E%E6%98%AF%E4%BA%91%E5%87%BD%E6%95%B0%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%89%80%E6%9C%89%E7%9A%84%E6%96%87%E7%AB%A0%E7%9A%84%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4%E9%83%BD%E4%BC%9A%E6%94%B9%E5%8F%98%EF%BC%8C%E7%9B%AE%E5%89%8D%E5%8F%AA%E8%83%BD%E9%80%9A%E8%BF%87%E4%B8%BA%E6%96%87%E7%AB%A0%E6%B7%BB%E5%8A%A0,updated%20%E5%AD%97%E6%AE%B5%E5%86%8D%E6%8F%90%E4%BA%A4%E6%89%8D%E8%83%BD%E9%81%BF%E5%85%8D%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E3%80%82)
