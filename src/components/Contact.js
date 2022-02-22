import React from 'react';

import logoMale from '../assets/images/logoMale.jpg'
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardMedia, CardContent, Typography, Divider, IconButton, Avatar} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "2.5rem 0.5rem 0rem",
        large: {
            width: theme.spacing(17),
            height: theme.spacing(17),
            align: "center"
       },
        googleM: {
            height: "400"
     }  
    },
   }));

const Contact = () => {
    const classes = useStyles();
    return(
        <Box component="div" >
            <Grid container justify="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent align="center">
                            <Typography gutterBottom variant="h5" component="h2" color="primary" >
                                Bajewscy Boat Service
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="h6" >
                                <div  align="center">
                                    <Avatar alt="logo Bajewscy Service Boat" src={logoMale} style={{height: '4rem', width: '4rem'}}/>
                                </div><br />
                                <Divider/>
                                <IconButton  href="tel://608358416" color="primary" >
                                    <CallIcon fontSize="small"/> 
                                </IconButton >
                                608 358 416
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="h6" >
                                <IconButton color="primary">
                                    <MailIcon fontSize="small"/>
                                </IconButton>
                                    kontakt@bajewscyservice.pl<br />
                                    Siedziba firmy:<br />
                                    05-090 Raszyn k/ Warszawy<br />
                                    ul. Popularna 17
                            </Typography>
                        </CardContent>
                        <CardMedia
                            style={{height: 350, border: 'solid 2px #00165f', allowfullscreen: ""}}
                            component="iframe"
                            title= "maps" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504406.7977485717!2d16.97653848897612!3d52.194148157222656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934796129d7bd%3A0x9bf14bd5b3fcc06d!2sPopularna%2017%2C%2005-090%20Nowe%20Grocholice!5e0!3m2!1spl!2spl!4v1616152766140!5m2!1spl!2spl" 
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Contact;