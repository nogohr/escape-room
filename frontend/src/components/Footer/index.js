import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary
  }
}));

export default function Footer({ link }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Link to={link} className={classes.link}>
            <Button variant="contained" color="primary" disableElevation>
              Volgende
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
