import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles, ThemeProvider, } from '@material-ui/core/styles';

import './App.css';

import {
  BracketTheme,
} from './colors';

import {
  Background,
} from './background';

import MountainsSVG from './static/footer.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  footer: {
    marginTop: 'auto',
    padding: 0,
    margin: 0,

    zIndex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    bottom: '30px',
  },
  mountains: {
    width: '90vw',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={BracketTheme}>
        <Background />

        <Container component="footer" className={classes.footer} maxWidth='xl'>
          <img src={MountainsSVG} alt="Pikes Peak Mountain Range" className={classes.mountains}/>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
