import React from 'react';

import Bajewscy from '../assets/images/BajewscyBoat.jpg';
import Bartek from '../assets/images/instruktor.jpg';
import Bartek1 from '../assets/images/Bartek_Bajewski_talent_techniczny.jpg';
import Dorota from '../assets/images/Dorota-Bajewska-serwis-lodzi.webp';

import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
  },
  title: {
    color: '#ba1825',
  },
  subheader: {
    color: '#ba1825',
  },
});

const AboutUs = () => {
  const classes = useStyles();
  const cardsContain = [
    {
      photo: Bajewscy,
      label: 'Bajewscy Boat Service',
      content:
        'Bajewscy Boat Service to firma rodzinna założona w 2013 r. Od ponad 10 lat jesteśmy związani z serwisowaniem łodzi żaglowych i motorowych. W naszym serwisie często wykorzystujemy własne, pionierskie rozwiązania.',
    },
    {
      photo: Bartek1,
      label: 'Bartek Bajewski',
      sub: 'talent techniczny',
      content:
        'Bartek, już jako dziecko, lubił konstruować i interesował się funkcjonowaniem różnych urządzeń mechanicznych. Mimo, że szkoła (jakoś szczególnie :)) nie odkryła jego zdolności w zakresie geometrii i matematyki stosowanej - Bartkowi nie przeszkadzało to w tworzeniu autorskich projektów i realizowaniu ich z matematyczną 🙂 precyzją.',
    },
    {
      photo: Dorota,
      label: 'Dorota Bajewska',
      sub: 'talent strategiczno-organizacyjny',
      content:
        'Dorota jest odpowiedzialna za digital marketing firmy, zajmuje się komunikacją pomiędzy firmą a klientem za pomocą mediów społecznościowych. Organizuje projekty firmy w zakresie administracyjno-biurowym oraz obsługi klienta.',
    },
    {
      photo: Bartek,
      label: 'Bartek Bajewski ',
      sub: 'instruktor żeglarstwa i motorowodny',
      content:
        'Jako instruktor Bartek nie daje po sobie poznać, że ma za sobą niezliczone godziny żeglugi pod żaglami oraz na silniku. Woli opowiadać żeglarskie anegdoty i być przewodnikiem wytrawnej techniki żeglarskiej niż nudnym belfrem 🙂',
    },
  ];

  const cardIn = cardsContain.map((el) => (
    <Card
      key={el.label}
      style={{ margin: '2.5rem 0.5rem 0rem' }}
      variant="outlined"
    >
      <CardHeader
        classes={{ title: classes.title, subheader: classes.subheader }}
        align="center"
        title={el.label}
        subheader={el.sub}
      />
      <Typography
        paragraph
        className={classes.cont}
        color="primary"
        align="center"
      >
        {el.content}
      </Typography>
      <CardMedia component="img" image={el.photo} alt={el.label} />
    </Card>
  ));
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <article>{cardIn}</article>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutUs;
