import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const TimeItem = (item) => {
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  const date = new Date(item.item);
  const time = `${date.getHours()}:${
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  }`;

  return (
    <Chip
      key={item}
      label={time}
      onClick={handleClick}
      deleteIcon={<DoneIcon />}
      color={clicked ? 'primary' : 'default'}
    />
  );
};

const TimeSelect = ({ selectTime, availableTimes }) => {
  const classes = useStyles();

  return (
    availableTimes && (
      <div className={classes.root}>
        {availableTimes[0].slots.map((item, index) => {
          return (
            <TimeItem
              onClick={() => selectTime(item.item)}
              key={index}
              item={item}
            />
          );
        })}
      </div>
    )
  );
};

export default TimeSelect;
