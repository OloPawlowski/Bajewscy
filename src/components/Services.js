import React from 'react';

import Bajewscy_uslugi from '../assets/images/Bajewscy_uslugi.jpg'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardContent, CardMedia, Typography, CardHeader} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
  title: {
    color: "#ba1825",
  }
  });

const Services = () => {

    const classes = useStyles();
    const services = [
      "Serwis łodzi",
      "Pełen zakres usług szkutniczych",
      "Montaż instalacji na jachtach, pełen zakres",
      "Naprawy mechaniczne silników łodzi",
      "Mazurska pomoc wodna w serwisie łodzi",
      "Holowanie jachtów \"door to door\"",
      "Rejsy jachtem żaglowym i motorowym, ze sternikiem",
    ].map(el => (
      <Typography key={el} paragraph color="primary">{el}</Typography>
    ));
   
  return (
    <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <article>
                <Card variant="outlined" style={{margin:'2.5rem 0.5rem 5.5rem'}} >
                  <CardHeader 
                    align="center"
                    className={classes.title}
                    title="Usługi w zakresie:"
                  />
                  <CardContent align="center">
                    {services}  
                  </CardContent>
                  <CardMedia
                    className={classes.media}
                    title="serwisowanie łodzi żaglowych i motorowych"
                    component="img"
                    image={Bajewscy_uslugi}
                    alt="Zakres usług serwis łodzi Bajewscy Boat Service"
                  />
                </Card> 
              </article>
            </Grid>
        </Grid>
    </Box>
  );
}
export default Services;

