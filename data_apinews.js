/* config-overrides.js */

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80e92fe9de91492d807e934300afefc4');
var today = new Date();
var lastWeekDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-7);
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var fs = require("fs");

// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.topHeadlines({
  q: 'coronavirus',
  from: lastWeekDate,
  to: date,
  country: 'us',
  sortBy: 'relevancy',
  page: 1
}).then(response => {
  console.log(response);
  fs.writeFile("./public/data/news_us.json",JSON.stringify(response), (err) => {
    if(err){
      console.error(err);
      return;
    };
    console.log("File has been created");
  });
});

