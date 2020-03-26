/* config-overrides.js */

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80e92fe9de91492d807e934300afefc4');
const data_folder = 'public/data';
var today = new Date();
var lastWeekDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-7);
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const fetch = require('node-fetch')
const fs = require('fs')

var pairs = [
  ["us", 'coronavirus'],
  ["cn", '疫情'], 
  ["it", 'coronavirus'],
  ["de", 'coronavirus'],
  ["sz", 'coronavirus'],
  ["ru", 'коронавирус'],
 ];

 for(var i = 0; i < 1; i++) {
  var pair = pairs[i];
  // To query /v2/everything
  // You must include at least one q, source, or domain
  const url =
    'http://newsapi.org/v2/top-headlines?country='+'us'+'&q='+'coronavirus'+'&apiKey=80e92fe9de91492d807e934300afefc4'
    
  const getData = async (url) => {
      try {
          encodedUrl = encodeURIComponent(url);
          const response = await fetch(encodedUrl)
          let data = await response.json()
          //console.info(data)
          fs.writeFileSync(data_folder+'/news_'+pair[0]+'.json', JSON.stringify(data))
      } catch (error) {
          console.log(error)
          process.exit(1)
      }
  }
      
  getData(url)
}

