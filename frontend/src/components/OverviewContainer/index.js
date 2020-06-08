import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import OverviewItem from 'components/OverviewItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function OverviewContainer() {
  const classes = useStyles();

  return (
    <Grid
      direction='row'
      justify='center'
      alignItems='center'
      spacing={3}
      fullWidth
    >
      <Grid item>
        <OverviewItem item='1x drinken + een hapje' />
        <OverviewItem item='Escape Room 1' />
      </Grid>
    </Grid>
  );
}
