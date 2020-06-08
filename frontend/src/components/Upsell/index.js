import React, { useEffect } from 'react';
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

export default function UpsellSelect({ options }) {
  const classes = useStyles();

  useEffect(() => {
    console.log('Upsell Component props', options);
  }, [options]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='space-evenly' spacing={3}>
          {options &&
            options.data.map((item, index) => (
              <UpsellItem
                id={item.id}
                key={index}
                price={item.price}
                title={item.name}
                description={item.description}
              />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
