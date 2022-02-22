import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Typography} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import img1 from '../assets/images/galeria/jachtowe-pogotowie-techniczne.webp';
import img2 from '../assets/images/galeria/naprawa-silnikow-lodzi.webp';
import img3 from '../assets/images/galeria/szkutnik-na-mazurach.webp';
import img4 from '../assets/images/galeria/mobilny-serwis-lodzi.webp';
import img5 from '../assets/images/galeria/jachtowa-pomoc-wodna.webp';
import img6 from '../assets/images/galeria/holowanie-lodzi.webp';
import img7 from '../assets/images/galeria/holowanie-jachtu.jpg';
import img8 from '../assets/images/galeria/serwisowanie-jachtu.webp';
import img9 from '../assets/images/galeria/naprawa-lodzi.webp';
import img10 from '../assets/images/galeria/szkutnik-mazury.webp';
import img11 from '../assets/images/galeria/Bajewscy-boat-service.webp';
import img12 from '../assets/images/galeria/serwis-lodzi.webp';
import img14 from '../assets/images/galeria/szkutnik-warszawa.webp';
import img13 from '../assets/images/galeria/serwis-silnikow-lodzi.webp';
import img15 from '../assets/images/galeria/rejsy-jachtem-ze-sternikiem.webp';
import img16 from '../assets/images/galeria/DorotaBajewska.webp';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'show',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
    height: "auto",
  },
}));

const ImageGridList = () => {
  const classes = useStyles();

  const imag = [
            {i: img1, a: "hol-motorowki", title: "hol-motorowki", c: 6}, 
            {i: img2, a: "naprawy-silników-łodzi", title: "naprawy-silników-łodzi", c: 3},
            {i: img3, a: "usługi_szkutnicze", title: "usługi_szkutnicze", c: 3}, 
            {i: img4, a: "serwis-jachtu", title: "serwis-jachtu", c: 6}, 
            {i: img5, a: "serwis-jachtu-zaglowego", title: "serwis-jachtu-zaglowego", c: 4}, 
            {i: img6, a: "hol-jachtu", title: "hol-jachtu", c: 5},
            {i: img7, a: "holowanie-jachtu", title: "holowanie-jachtu", c: 9}, 
            {i: img8, a: "serwisowanie-jachtu", title: "serwisowanie-jachtu", c: 6}, 
            {i: img9, a: "naprawa-łodzi",title: "naprawa-łodzi", c: 3}, 
            {i: img16, a: "Bajewscy-boat-Dorota-Bajewska", title: "Bajewscy-boat-service-Dorota-Bajewska", c: 3}, 
            {i: img10, a: "szkutnik-mazury", title: "szkutnik-mazury", c: 3},
            {i: img11, a: "Bajewscy-boat", title: "Bajewscy-boat", c: 3}, 
            {i: img15, a: "rejsy-jachtem-żaglowym-motorowym.jpg", title: "rejsy-jachtem-żaglowym-motorowym.jpg", c: 9}, 
            {i: img12, a: "serwis-lodzi", title: "serwis-lodzi", c: 4}, 
            {i: img13, a: "serwis_jachtów", title: "serwis_jachtów", c: 5}, 
            {i: img14, a: "naprawa-silnika-lodzi", title: "naprawa-silnika-lodzi", c: 9}]
            .map(el => {
              return (
                <GridListTile key={el.i} cols={el.c || 1}>
                  <img src={el.i} alt={el.a} title={el.title}/>
                </GridListTile>
              )
            });
  return (
    <Box component="div" className={classes.mainContainer}>
    <Grid container justify="center" style={{margin:'4.5rem 0 0'}} variant="outlined">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={9}>
              {imag}
            </GridList>
          </div>
          <Typography paragraph color="primary" gutterBottom variant="body2" align="right">
            autorem zdjęć jest Bartek Banaszak
          </Typography>
        </Grid>
    </Grid>
  </Box>
  );
};
export default ImageGridList;
