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

export default function NewsPanel(props) {
  const classes = useStyles();
  const [newsData, setNewsData] = useState([])
  
  
  async function fetchData() {
    const res = await fetch('data/us_news.json');
    res
      .json()
      .then(res => setNewsData(res["articles"]));
  }

  useEffect(() => {
    fetchData();
  });
  const {darkMode, lang} = props
  if (newsData.length === 0) {
      return (i18n.NO_NEWS_MESSAGE[lang])
  }
  return (
    <List className={classes.root}>
    {newsData.map((news, i) => (
        <ListItem alignItems="flex-start">
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
                
                <Button size="small" color="primary" href={news.url}>
                    Learn More
                </Button>
            </CardActions>
            </Card>
        </ListItem>
    ))}
    </List>
  );
}