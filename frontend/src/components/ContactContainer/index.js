import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ContactContainer = ({
  saveContact,
  setName,
  setEmail,
  setPhone,
  setRemarks,
}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    agree: false,
  });

  const handleCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleRemarks = (event) => {
    setRemarks(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={3}
      fullWidth
    >
      <FormGroup className={classes.root} noValidate autoComplete='off'>
        <Grid item>
          <TextField
            fullWidth
            id='standard-basic'
            label='Naam'
            onChange={handleName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='standard-basic'
            label='Email'
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='standard-basic'
            label='Telefoon'
            onChange={handlePhone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='filled-multiline-flexible'
            label='Opmerkingen'
            multiline
            rowsMax='4'
            rowsMin='4'
            onChange={handleRemarks}
          />
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.agree}
              onChange={handleCheckBox}
              name='agree'
            />
          }
          label='Hierbij verklaar ik dat ik 18 jaar of ouder ben.'
        />
      </FormGroup>
    </Grid>
  );
};
export default ContactContainer;
