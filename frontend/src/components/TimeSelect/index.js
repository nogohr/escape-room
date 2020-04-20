import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

export default function TimeSelect() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />{" "}
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />{" "}
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />{" "}
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />{" "}
      <Chip
        label="14:00"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
    </div>
  );
}
