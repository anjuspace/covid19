#!/bin/bash
echo  `date +"%Y-%m-%d %T"` "-- Start Refresh Data" >> ~/tmp/test.txt

cd /home/leizhao/ui/covid19 

git pull >> ~/tmp/test.txt

git submodule sync --recursive >> ~/tmp/test.txt
git submodule update --remote >> ~/tmp/test.txt
yarn install >> ~/tmp/test.txt
yarn build >> ~/tmp/test.txt

git add .
git commit -m "update data"
git push

echo  `date +"%Y-%m-%d %T"` "-- End Refresh Data" >> ~/tmp/test.txt
echo  `date +"%Y-%m-%d %T"` "-- Start Publish Data" >> ~/tmp/test.txt
scp -r ./build/* shujun@sjwebbus1.westus2.cloudapp.azure.com:/var/www/html/covid19/ >> ~/tmp/test.txt
#scp -r ./build/* shujun@sjwebbus1.westus2.cloudapp.azure.com:/home/shujun/download/320/ >> ~/tmp/test.txt
echo  `date +"%Y-%m-%d %T"` "-- End Publish Data" >> ~/tmp/test.txt
echo  $'--------------------------------------------------------------------------------\n\n\n\n\n\n' >> ~/tmp/test.txt