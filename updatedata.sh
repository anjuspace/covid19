#!/bin/bash

git pull

git submodule sync --recursive
git submodule update --remote
yarn install
yarn build

git add .
git commit -m "update data"
git push

# scp -r ./build/* shujun@sjwebbus1.westus2.cloudapp.azure.com:/var/www/html/covid19/
scp -r ./build/* shujun@sjwebbus1.westus2.cloudapp.azure.com:/var/www/html/covid19/