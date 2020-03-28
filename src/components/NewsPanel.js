import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import i18n from '../data/i18n.yml'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-161399414-1', {
  debug: true,
  titleCase: false
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  
  darkcard: {
      backgroundColor:'#888',
      color: '#fff'
  },

  lightcard: {
    backgroundColor:'#eee',
    color: '#444'
  },

  inline: {
    display: 'inline',
  },
  thumbnail: {
      height: 90,
      whidth: 160,
  }
}));

const countryCodes = {
  "中国": "data/news_cn.json",
  "德国": "data/news_de.json",
  "意大利": "data/news_it.json",
  "俄罗斯": "data/news_ru.json",
  "瑞士": "data/news_sz.json",
  "美国": "data/news_us.json",
  "日本": "data/news_jp.json",
  "韩国": "data/news_kr.json",
  "全球": "data/news_global.json"
}

export default function NewsPanel(props) {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([])
  const isCancelled = React.useRef(false);
  
  async function fetchData(currentRegion) {
    let newsFile = countryCodes[currentRegion] || "data/news_global.json"
    const res = await fetch(newsFile);
    res
      .json()
      .then(res => {
            if (!isCancelled.current) {
              setNewsData(res["articles"]);
            }
        })
  }
 
  const handleClick = (url) => {
    console.log(`this is: ${url}`);
    ReactGA.event({
      category: 'news',
      action: 'open',
      label: url
    });
    window.location=url;
  }

  useEffect(() => {
    const { currentRegion } = props
   
    fetchData(currentRegion[0]);
    return () => {isCancelled.current = true;}
  });
 
  const {darkMode, lang} = props
  if (newsData.length === 0) {
      return (i18n.NO_NEWS_MESSAGE[lang])
  }
  return (
    <List className={classes.root}>
    {newsData.map((news, i) => (
        <ListItem alignItems="flex-start" key={i}>
            <Card className={ darkMode ? classes.darkcard: classes.lightcard}>
            <CardHeader
                title={news.title}
                subheader={news.publishedAt}
            />
            <CardActionArea>
                <CardContent>
                    <Row>
                        <Col lg='9'>{news.description}</Col>
                        <Col lg='3'><img src={news.urlToImage} className={classes.thumbnail} alt="" /></Col>
                    </Row>
                </CardContent>
                </CardActionArea>
                <CardActions>
                
                <Button size="small" color="primary" href='#' onClick={() => handleClick(news.url)}>
                    Learn More
                </Button>
            </CardActions>
            </Card>
        </ListItem>
    ))}
    </List>
  );
}