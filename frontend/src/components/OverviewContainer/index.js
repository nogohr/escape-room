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

export default function OverviewContainer({ items }) {
  const classes = useStyles();

  console.log('Overview Items', items);
  return (
    <Grid
      direction='row'
      justify='center'
      alignItems='center'
      spacing={3}
      fullWidth
    >
      <Grid item>
        <OverviewItem item={`Upsell Optie: ${items.selectedOption}`} />
        <OverviewItem item={`Escape Room: ${items.items.selectedItem}`} />
      </Grid>
    </Grid>
  );
}
