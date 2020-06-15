import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: '20px',
  },
}));

export default function Footer({ link, items, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Link
            to={{
              pathname: link,
              state: {
                items,
              },
            }}
            className={classes.link}
          >
            <Button
              onClick={onClick}
              className={classes.button}
              variant='contained'
              color='primary'
            >
              Volgende
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
