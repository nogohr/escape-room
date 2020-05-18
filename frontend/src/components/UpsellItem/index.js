import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 345,
  },
  clicked: {
    maxWidth: 345,
    minWidth: 345,
    backgroundColor: 'darkseagreen',
  },
  media: {
    height: 140,
  },
});

const UpsellItem = ({ title, price, description }) => {
  const [clicked, setClick] = useState(false);
  const classes = useStyles();

  return (
    <Card
      className={clicked ? classes.clicked : classes.root}
      onClick={() => setClick(!clicked)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://picsum.photos/500?random'
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Prijs: {price}
            <br />
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Kiezen
        </Button>
      </CardActions>
    </Card>
  );
};
export default UpsellItem;
