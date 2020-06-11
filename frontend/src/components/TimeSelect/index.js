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

const TimeItem = ({ item, selectTime }) => {
  const [clicked, setClick] = useState(false);

  const date = new Date(item);
  const time = `${date.getHours()}:${
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  }`;

  const handleClick = () => {
    selectTime(item);
    setClick(!clicked);
  };

  return (
    <Chip
      onClick={handleClick}
      key={item}
      label={time}
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
          return <TimeItem selectTime={selectTime} key={index} item={item} />;
        })}
      </div>
    )
  );
};

export default TimeSelect;
