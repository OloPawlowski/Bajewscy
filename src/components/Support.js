import React from 'react';

import MazurskaPomocWodna from '../assets/images/naprawa-silnika-lodzi.jpg'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardMedia, CardHeader, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
  title: {
    color: "#ba1825",
  },
  cont: {
    color: "primary",
    padding: 5
  }
  });
  
  const Support = () => {
    const classes = useStyles();
    const supports = [
      {photo: MazurskaPomocWodna, label: "Mazurska_pomoc_wodna", alt: "naprawa-silnika-lodzi"}
    ];
  
    const support = supports.map(el => (
    <Card key={el.label} variant="outlined" style={{margin:'2.5rem 0.5rem 3rem'}}>
       <CardHeader 
        align="center"
        className={classes.title}
        title="Mazurska Pomoc Wodna"/>
      <Typography paragraph className={classes.cont} color="primary" align="center"> 
      W sezonie letnim nasza firma świadczy usługi mobilnego pogotowia technicznego <br /> na obszarze szlaku Wielkich Jezior Mazurskich.<br />Zapraszamy do współpracy.
      </Typography>
        <CardMedia
          component="img"
          image={el.photo}
          alt={el.alt}
        />
    </Card>
  ))
    return (
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <article>
              {support}
            </article>
          </Grid>
        </Grid>
      </Box>
    );  
}
export default Support;

