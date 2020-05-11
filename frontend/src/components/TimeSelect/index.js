import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const TimeItem = (item) => {
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  console.log("Time Item", item.item);
  return (
    <Chip
      key={item}
      label={item.item}
      onClick={handleClick}
      deleteIcon={<DoneIcon />}
      color={clicked ? "primary" : "default"}
    />
  );
};

const TimeSelect = (selectTime) => {
  const classes = useStyles();

  const availableTimes = [
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
  ];
  return (
    <div className={classes.root}>
      {availableTimes.map((item, index) => {
        return (
          <TimeItem
            onClick={() => selectTime(item.item)}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TimeSelect;
