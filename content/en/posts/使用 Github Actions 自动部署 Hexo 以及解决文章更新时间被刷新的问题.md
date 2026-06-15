---
title: "Auto-Deploy Hexo and Fix Updated-Time Reset"
description: "Auto-deploy a Hexo site with GitHub Actions by configuring a token, repository secrets, and workflow while preserving article update times."
summary: "Auto-deploy a Hexo site with GitHub Actions by configuring a token, repository secrets, and workflow while preserving article update times."
date: 2022-09-10T07:44:00+08:00
draft: false
slug: "3"
tags:
  - Hexo
  - GitHub
categories:
  - Tutorials
---

# Configure a Token
Open [GitHub](https://github.com), click your avatar in the top-right corner, then click "Settings".

![](https://fultal.qinyan.org/68747470733a2f2f747661332e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696878773030696a3330376130683271346f2e6a7067.jpg)

Scroll down and click "Developer settings".

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696c696c6e79676a333163773073396b33342e6a7067.jpg)

Click "Personal access tokens", then "Generate new token".

![](https://fultal.qinyan.org/68747470733a2f2f74766178312e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631696e6c323668636a333171383132777162382e6a7067.jpg)

Enter any name, set "Expiration" to "No Expiration", check `repo` and `workflow`, then click "Generate token". Copy the generated token.

**Important: The token is shown only once. Keep this tab open until everything is configured successfully.**

**Do not leak your token unless you fully trust the recipient.**

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a4545677931683631697670763568746a33307876306e6c31306c2e6a7067.jpg)

# Repository Setup
We want local pushes to go into your Hexo source repository, and then deploy from that repository to your GitHub Pages repository.

Create a new repository with any name, preferably something meaningful, for example `Hexo_Blog_Source`.

You can make it `Public` or `Private` based on your needs. If your source contains private data, do not make it public.

![](https://fultal.qinyan.org/68747470733a2f2f74766178332e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a3739316d666d6a3330787630776f3765732e6a7067.jpg)

Open repository settings, go to `Secrets` -> `Actions`, then click `New repository secret`.

![](https://fultal.qinyan.org/68747470733a2f2f74766178342e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a3965633538366a333079783073323765762e6a7067.jpg)

Set name to `GH_TOKEN`, paste your token, then click `Add secret`.

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a636677396f706a333078763073326e34662e6a7067.jpg)

# Git Setup
Open a terminal in your local blog folder.

![](https://fultal.qinyan.org/68747470733a2f2f74766178312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316a6862316970306a33307570306e356b306d2e6a7067.jpg)

If Git is not initialized yet:
```
git init
git branch -m main
```

Then connect your remote repository:
```
git remote add origin <your-remote-repo-url>
```

Click "Code" in GitHub and copy the remote URL.

![](https://fultal.qinyan.org/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316f66677775626c6a333137613076743464692e6a7067.jpg)

Create `.github/workflow/` locally, then create `autodeploy.yml` inside it.

![](https://fultal.qinyan.org/68747470733a2f2f747661342e73696e61696d672e636e2f6c617267652f303038754f5a45456779316836316f6b636f6863356a33307570306e3537376e2e6a7067.jpg)

Open `autodeploy.yml` and fill in:

```yml
name: Auto Deploy

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
      - name: Checkout branch
        uses: actions/checkout@v2
        with:
          ref: main

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '16.x'

      - name: Install Hexo
        run: |
          export TZ='Asia/Shanghai'
          npm install hexo-cli -g

      - name: Cache dependencies
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

      - name: Install dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: |
          npm install --save

      - name: Generate static files
        run: |
          hexo clean && hexo generate -g -c 2

      - name: Deploy to GitHub
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: ${{ secrets.GH_TOKEN }}
          repository-name: FreeDivers/FreeDivers.github.io # replace with your own: username/username.github.io
          branch: main
          folder: public
          commit-message: '${{ github.event.head_commit.message }} Updated By GitHub Actions'
```

Finally push your project:
```
git add .
git commit -m first_commit
git push origin main -u
```
If everything is correct, you can open `Actions` in the repository and see workflow results.

# Exclude Files You Don't Need to Upload
Some files/folders may not need to be uploaded. Excluding them saves upload and deploy time.

Edit `.gitignore` in your blog source root and add/remove items as needed.

# The Updated-Time Reset Problem
After enabling auto deploy, every post's updated time may become the deployment time. That's because theme rendering often reads the `updated` field in front matter. If you define `updated` when writing, it will not be rewritten by deployment.

## Fix for Future Posts
Open:
`<blog-root>\scaffolds\post.md`

Add:
```
date: {{ date }}
updated: {{ date }}
```
Save it.

Then when you create a new post:
```
hexo new post "title"
```
`updated` is added automatically.

## Fix for Existing Posts
If you've already deployed automatically, you'll need to edit `updated` manually.

If not yet deployed, you can also refer to this [article](https://www.cnblogs.com/yyyzyyyz/p/15792199.html#:~:text=%E5%9C%A8%E9%83%A8%E7%BD%B2%E5%AE%8CGithub%20Action%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%AD%98%E5%9C%A8%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%EF%BC%8C%E6%AF%8F%E6%AC%A1%E6%9B%B4%E6%96%B0%E6%97%B6%EF%BC%8C%E7%94%B1%E4%BA%8E%E6%98%AF%E4%BA%91%E5%87%BD%E6%95%B0%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%89%80%E6%9C%89%E7%9A%84%E6%96%87%E7%AB%A0%E7%9A%84%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4%E9%83%BD%E4%BC%9A%E6%94%B9%E5%8F%98%EF%BC%8C%E7%9B%AE%E5%89%8D%E5%8F%AA%E8%83%BD%E9%80%9A%E8%BF%87%E4%B8%BA%E6%96%87%E7%AB%A0%E6%B7%BB%E5%8A%A0,updated%20%E5%AD%97%E6%AE%B5%E5%86%8D%E6%8F%90%E4%BA%A4%E6%89%8D%E8%83%BD%E9%81%BF%E5%85%8D%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E3%80%82).
