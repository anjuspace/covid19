/* config-overrides.js */

const data_folder = 'public/data';
const fetch = require('node-fetch')
const fs = require('fs')

 var pairs2 = {
  "items": [
    { "country":"cn", "keyword": "新冠"},
    { "country":"us", "keyword": "coronavirus"},
    { "country":"it", "keyword": "coronavirus"},
    { "country":"de", "keyword": "coronavirus"},
    { "country":"sz", "keyword": "coronavirus"},
    { "country":"ru", "keyword": "коронавирус"},
    { "country":"global", "keyword": "coronavirus"},
    {"country": "jp", "keyword": "コロナウイルス"},
    {"country": "kr", "keyword": "코로나 바이러스"},
  ]
 }


 const getData = async (url, country) => {
  try {
      const response = await fetch(url)
      let data = await response.json()
      fs.writeFileSync(data_folder+'/news_'+country+'.json', JSON.stringify(data))
  } catch (error) {
      console.log(error)
      process.exit(1)
  }
}

pairs2["items"].forEach(item =>{
  let baseUrl = 'https://newsapi.org/v2/top-headlines?country='

  if(item.country==='global'){
    baseUrl = "https://newsapi.org/v2/everything?"
  }  

  let queryStr =  item.country+'&q='+encodeURIComponent(item.keyword)+'&apiKey=80e92fe9de91492d807e934300afefc4';
  
  if(item.country==='global'){
    queryStr = 'q='+encodeURIComponent(item.keyword)+'&apiKey=80e92fe9de91492d807e934300afefc4';
  } 
  getData(baseUrl+queryStr, item.country)
})

