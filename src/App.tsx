import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bracket.engineering/">
        Bracket Engineering, Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.root}>
        <Container component="header" className={classes.header} maxWidth="xl">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Bracket Engineering, Inc.
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h1" gutterBottom>
              Software consulting with a focus on IoT and System Design
            </Typography>
          </Box>
        </Container>
        <Container component="main" className={classes.main} maxWidth="xl">
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
