import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Componentss
import UpsellItem from 'components/UpsellItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 250,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function UpsellSelect() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='space-evenly' spacing={3}>
          <UpsellItem
            price='2'
            title='1x drinken + een hapje'
            description='Na de escape room krijgt u een drankje'
          />
          <UpsellItem
            price='5'
            title='1x drinken'
            description='Na de escape room krijgt u een hapje en een drankje'
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
