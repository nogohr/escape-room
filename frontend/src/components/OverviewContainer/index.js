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

export default function OverviewContainer({ items, selectedRoom, selectedOption }) {
  const classes = useStyles();

  const escapeRoomName = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const orderOptionName = selectedOption && selectedOption.name ? selectedOption.name : '';

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
        <OverviewItem item={`Escape Room: ${escapeRoomName}`} />
        <OverviewItem item={`Extra Optie: ${orderOptionName}`} />
      </Grid>
    </Grid>
  );
}
