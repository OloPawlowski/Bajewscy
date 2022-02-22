import React, { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 230,
    height: '100%',
    background: '#30408d',
    color: 'white',
  },
  fullList: {
    width: 'auto',
  },
}));

const HeadIn = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { item: <HomeIcon />, to: '/' },
          { item: 'O nas', to: '/o-nas' },
          { item: 'Usługi', to: '/uslugi' },
          { item: 'Mazurska pomoc wodna', to: '/mazurska-pomoc-wodna' },
          { item: 'Opinie klientów', to: '/opinie-klientow' },
          { item: 'Galeria', to: '/galeria' },
          { item: 'Kontakt', to: '/kontakt' },
        ].map((item, num) =>
          num === 4 ? (
            <div key={item.to}>
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.facebook.com/BajewscyBoatService/reviews/?ref=page_internal"
              >
                <ListItemText primary={item.item} />
              </ListItem>
              <Divider />
            </div>
          ) : (
            <div key={item.to}>
              <ListItem button component={Link} to={item.to}>
                <ListItemText primary={item.item} />
              </ListItem>
              <Divider />
            </div>
          )
        )}
      </List>
    </div>
  );

  return (
    <Fragment>
      <Box className={classes.root} component="nav">
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon fontSize="large" color="secondary" />
            </IconButton>
            <Typography component="div" className={classes.title} align="right">
              <IconButton color="secondary" href="tel://608358416">
                <CallIcon />
              </IconButton>
            </Typography>
            <IconButton
              href="https://www.instagram.com/bajewscy_boat_service/"
              target="_blank"
              edge="end"
              className={classes.MenuIcon}
            >
              <InstagramIcon color="secondary" />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/channel/UCFPsutz8IhgqT3w-je3Tmig/featured"
              target="_blank"
              edge="end"
              className={classes.IconButton}
            >
              <YouTubeIcon color="secondary" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/BajewscyBoatService/"
              target="_blank"
              edge="end"
              className={classes.IconButton}
            >
              <FacebookIcon color="secondary" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className={classes.drawerMenu}>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </Box>
    </Fragment>
  );
};
export default HeadIn;
