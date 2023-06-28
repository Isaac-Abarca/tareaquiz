#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'


# git push -f git@ginthub.com:Isaac-Abarca/tareaquiz.git main:gh-pages