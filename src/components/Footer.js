import React from 'react';

import {makeStyles} from '@material-ui/core';
import {Box, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    footer1: {
        margin: "9rem 0 0",
        padding: "1rem",
        backgroundColor: '#30408d',
        color: '#ffffff',
        position: 'static',       
        width: "100%",
    },
    footer2: {
        paddingTop: "2rem",
        backgroundColor: '#30408d',
        color: '#BBCFE9',
        position: 'static',
        width: "100%",       
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Box component="div" >
            <Typography gutterBottom variant="body2" component="h6" align="center" className={classes.footer1} >
                        &copy;  2013-2022 Bajewscy Boat Service
            <Typography gutterBottom variant="caption" paragraph align="center" className={classes.footer2} >
                        wykonanie Alek. Pawłowski
            </Typography>
            </Typography>
        </Box>
    )
}
export default Footer;
