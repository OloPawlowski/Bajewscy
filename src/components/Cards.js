import React from 'react';

import bajLogo from '../assets/images/Bajewscy-Boat-Service.webp';
import slip from '../assets/images/holowanie-jachtow.webp';
import plecy from '../assets/images/mazurska-pomoc-wodna.jpg';
import kolanko from '../assets/images/montaz-instalacji-na-jachtach.jpg';
import lokiec from '../assets/images/holowanie-jachtu.jpg';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
  },
});

const Cards = () => {
  const classes = useStyles();
  const cardsContain = [
    {
      photo: bajLogo,
      label: 'O nas',
      alt: 'logo Bajewscy Boat Service',
      to: '/o-nas',
    },
    {
      photo: slip,
      label: 'Usługi',
      alt: 'Bajewscy holowanie jachtów',
      to: '/uslugi',
    },
    {
      photo: plecy,
      label: 'Mazurska pomoc wodna',
      alt: 'Bajewscy mazurska pomoc wodna',
      to: '/mazurska-pomoc-wodna',
    },
    {
      photo: kolanko,
      label: 'Galeria',
      alt: 'Bajewscy montaż instalacji na jachtach',
      to: '/galeria',
    },
    {
      photo: lokiec,
      label: 'Kontakt',
      alt: 'Bajewscy holowanie jachtu',
      to: '/kontakt',
    },
  ].map((el) => (
    <article key={el.label}>
      <Card style={{ margin: '2.5rem 0.5rem 0rem' }} variant="outlined">
        <CardActionArea component={Link} to={el.to}>
          <CardMedia
            rel="preload"
            as="image"
            component="img"
            image={el.photo}
            alt={el.alt}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="p"
              color="primary"
              align="center"
            >
              {el.label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </article>
  ));
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <section>{cardsContain}</section>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Cards;
