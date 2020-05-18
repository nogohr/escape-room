import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  clicked: {
    maxWidth: 345,
    minWidth: 345,
    backgroundColor: 'darkseagreen',
  },
  media: {
    height: 140,
  },
  actions: {
    justifyContent: 'space-around',
  },
});

const RoomItem = (props) => {
  const classes = useStyles();
  const [clicked, setClick] = useState(false);

  const {
    name,
    maxPlayerCount,
    id,
    playTime,
    setupTime,
    minimumPlayerAge,
    key,
    selectItem,
  } = props;

  const clickHandler = (id) => {
    setClick(!clicked);
    selectItem(id);
  };

  console.log('Playtime', playTime);
  return (
    <Card
      className={clicked ? classes.clicked : classes.root}
      key={key}
      onClick={() => clickHandler(id)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/500?random=${key}`}
          title={`Escape Room ${key}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lorem Lorem Ipsum Ipsum Escape room
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Typography variant='body1' color='textSecondary' component='span'>
          <FaceIcon />
          {minimumPlayerAge}+
        </Typography>
        <Typography variant='body1' color='textSecondary' component='span'>
          <AccessAlarmsIcon />
          {playTime}m
        </Typography>

        <Button size='small' color='primary'>
          Kiezen
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomItem;
