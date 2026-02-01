#!/bin/bash
git add . > push.log 2>&1
git commit -m "feat: add about page, google analytics, category url customization" >> push.log 2>&1
git push origin main >> push.log 2>&1
