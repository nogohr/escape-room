import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px;',
  },
}));

const PlayerSelect = ({ selectPlayerCount }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      fullWidth
      id='standard-basic'
      label='Aantal personen'
      type="number"
      onChange={selectPlayerCount}
    />
  )
};

export default PlayerSelect;
