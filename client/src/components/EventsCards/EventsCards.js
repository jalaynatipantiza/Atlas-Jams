import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/styles';
import { Link } from 'react-router-dom';


export default function EventsCard({ description, name, date, event_picture, time, am, id, key }) {


  const classes = useStyles();
  const partialDescription = description.slice(0, 100);
  

  return (
    <Link to={`/events/${id}`} style={{ textDecoration: 'none', color: "inherit" }}>
      <Card className={classes.root} style={{margin:"10px"}}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={event_picture}

          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="h1">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {`${date} ${time}`}
            { am ? "am" : "pm"}

            </Typography>
            <Typography variant="body2" component="p">
              {partialDescription}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction} >
          <Button size="small" color="primary" style={{alignSelf:"center"}}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}