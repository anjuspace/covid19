## COVID-19 Coronavirus Map / 新型冠状病毒肺炎疫情图

<img src="https://raw.githubusercontent.com/anjuspace/covid19/master/public/cover.png" width="400" />

COVID-19 (2019-nCOV / SARS-CoV-2) Coronavirus Map (http://covid19records.com) is an interactive, animated map for the COVID-19 coronavirus outbreak.

The map is based on multiple sources (see below for details). If you are interested, the integrated dataset can be found [here](https://github.com/anjuspace/covid19/blob/master/public/data/all.json). Note that numbers in different data sources may not match with each other exactly.

Pull requests are welcome. If you'd like to support the work and buy me a ☕, I greatly appreciate it!

<a href='https://ko-fi.com/B0B01J3N3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

### Data Sources
- Worldwide/United States/Australia/Canada: [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19)
- China/Worldwide: [COVID-19/2019-nCoV Time Series Infection Data Warehouse](https://github.com/BlankerL/DXY-COVID-19-Data) (data crawled from [Ding Xiang Yuan](https://ncov.dxy.cn/ncovh5/view/pneumonia))
- United States (county level): [1Point3Acres COVID-19 in US and Canada](https://coronavirus.1point3acres.com/en)
- Italy: [Dati COVID-19 Italia](https://github.com/pcm-dpc/COVID-19)
- South Korea: [parksw3/COVID19-Korea](https://github.com/parksw3/COVID19-Korea)
- France: [cedricguadalupe/FRANCE-COVID-19](https://github.com/cedricguadalupe/FRANCE-COVID-19)
- Germany/Austria/Netherlands/Sweden/Poland/Norway/Czechia: [covid19-eu-zh/covid19-eu-data](https://github.com/covid19-eu-zh/covid19-eu-data)
- Japan: [新型コロナウイルス感染速報](https://github.com/swsoyee/2019-ncov-japan)
- Spain: [datadista/datasets](https://github.com/datadista/datasets)
- Switzerland: [daenuprobst/covid19-cases-switzerland](https://github.com/daenuprobst/covid19-cases-switzerland)
- United Kingdom: [tomwhite/covid-19-uk-data](https://github.com/tomwhite/covid-19-uk-data)
- Iran/Chile: [Wikipedia](https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data)
- Portugal: [Dados relativos à pandemia COVID-19 em Portugal](https://github.com/dssg-pt/covid19pt-data)
- Brazil: [COVID-19 Brazil - time series data](https://github.com/elhenrico/covid19-Brazil-timeseries)
- Malaysia: [ynshung/covid-19-malaysia](https://github.com/ynshung/covid-19-malaysia)
- Belgium: [eschnou/covid19-be](https://github.com/eschnou/covid19-be)
- Russia: [grwlf/COVID-19_plus_Russia](https://github.com/grwlf/COVID-19_plus_Russia)
- Ecuador/Mexico/Argentina/Peru/Colombia: [Latin America Covid-19 Data Repository by DSRP](https://github.com/DataScienceResearchPeru/covid-19_latinoamerica)
- India: [covid19india](https://github.com/covid19india/covid19india-react)
- Ireland: [andrewm4894/ireland_covid19_data](https://github.com/andrewm4894/ireland_covid19_data)
- South Africa: [Coronavirus COVID-19 (2019-nCoV) Data Repository for South Africa](https://github.com/dsfsi/covid19za)
- Philippines: [gigerbytes/ncov-ph-data](https://github.com/gigerbytes/ncov-ph-data)
- Romania: [Coronavirus COVID-19 România](https://covid19.geo-spatial.org/)
- Indonesia: [Monitoring COVID19 Indonesia by catchmeup.id](https://docs.google.com/spreadsheets/d/1sgiz8x71QyIVJZQguYtG9n6xBEKdM4fXuDs_d8zKOmY/htmlview#)
- Saudi Arabia: [Saudi Arabia Coronavirus disease (COVID-19) situation](https://datasource.kapsarc.org/explore/dataset/saudi-arabia-coronavirus-disease-covid-19-situation/)
- Thailand: [TH-STAT.com](https://covid19.th-stat.com/)

### Maps
Original map shapefiles are from [GADM](https://gadm.org/), which are converted to TopoJSON files using [mapshaper](https://github.com/mbloch/mapshaper).

### Tools
#### Install yarn

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
## add this to .zshrc
export PATH=$PATH:$HOME/.yarn/bin
source ~/.zshrc

yarn --version
```
#### Install node 10.x
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
## add this to .zshrc
export NVM_DIR=$HOME/.nvm


source ~/.zshrc

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm

nvm install v10.19.0

node --version

```
#### Install pyton3.7
```
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.7
python ––version
```
#### Install pip for python3

```
sudo apt update
sudo apt install python3-pip
pip3 --version
```



### Build and Run

### Build
```
git submodule sync --recursive
git submodule update --remote
git submodule update --init (may not needed)
yarn install
yarn build
```
### Run
First run, you need to install serve

```
yarn global add serve
```

start the website in local

```
serve -s build
```

