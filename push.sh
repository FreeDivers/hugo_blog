#!/bin/bash
git add . > push.log 2>&1
git commit -m "feat: convert about page to guestbook with twikoo comments" >> push.log 2>&1
git push origin main >> push.log 2>&1
