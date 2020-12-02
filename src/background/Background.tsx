import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  Copyright,
} from '../copyright';

import LogoSVG from '../static/banner-logo-font-path.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'absolute',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    height: '100%',
  },
  copyright: {
    marginTop: 'auto',
    marginBottom: theme.spacing(0.25),
    zIndex: 2,
  },
  banner: {
    marginTop: theme.spacing(3),

    maxWidth: '300px',
    minWidth: '120px',

    zIndex: 0,
  },
  content: {
    zIndex: 0,

    margin: theme.spacing(4),
  }
}));

export default function Background() {
  const classes = useStyles();

  return (
    <Container component="header" className={classes.main} maxWidth="xl">
      <img src={LogoSVG} alt="bracket engineering, inc." className={classes.banner}/>

      <Typography variant="body1" color="textSecondary" component="h6" className={classes.content}>
        Software consulting services specializing in IoT and System Design.
      </Typography>

      <Container maxWidth="sm" className={classes.copyright}>
        <Copyright />
      </Container>
    </Container>
  );
}

