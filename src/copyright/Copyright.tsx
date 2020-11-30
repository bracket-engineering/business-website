import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  copyrightText: {
    fontSize: '0.60rem',
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textPrimary" align="center" className={classes.copyrightText}>
      {'Copyright © '}
      <Link color="inherit" href="https://bracket.engineering/">
        Bracket Engineering, Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
