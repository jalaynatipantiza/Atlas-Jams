import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useStyles from './styles/styles';
import axios from 'axios';

export default function EventsPage({ event }) {
  const classes = useStyles();

  // event, performers, space, host
  const [eventInfo, setEventInfo ] = useState(null)
  
  useEffect(()=> {
    window.scrollTo(0, 0)
    axios.get(`/event/${event}`)
      .then(res => {
        console.log(res.data)
        setEventInfo({...res.data})
      })
  }, [])
  window.localStorage.navTheme = 'LIGHT'
  
  console.log('event info:', eventInfo);

  return (
    <React.Fragment>
      <Grid 
        container
        className={classes.banner}
      >

      </Grid>
      <Grid
        container
        className={classes.header}
      >
        <Grid item xs={6}>
          <Grid item className={classes.headerLeft}>
  {/* {eventInfo &&  */}
            <TodayIcon />Date/<AccessTimeIcon />Time/<LocationOnIcon />Location 
  // }
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.headerRight}>
          <Grid item>
            <Button variant="contained" color="primary">
              Attend
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.main}>
          <Typography variant="h4" className={classes.title}>
            Host
          </Typography>
          <Paper className={classes.paper}>
            <Grid item>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                  <Typography gutterBottom variant="subtitle1" className={classes.name}>
                      Host Name
                    </Typography>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa erat, quis placerat erat cursus non. Nulla a pulvinar mi. Vestibulum mollis semper blandit. Nulla volutpat luctus lectus in placerat. Quisque pulvinar id lacus eget dictum. Integer ultrices volutpat orci at placerat. Maecenas porta non felis vitae pharetra. Suspendisse.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item className={classes.main}>
          <Typography variant="h4" className={classes.title}>
            Performer(s)
          </Typography>
          <Paper className={classes.paper}>
            <Grid item>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                  <Typography gutterBottom variant="subtitle1" className={classes.name}>
                      Performer Name | Genre
                    </Typography>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa erat, quis placerat erat cursus non. Nulla a pulvinar mi. Vestibulum mollis semper blandit. Nulla volutpat luctus lectus in placerat. Quisque pulvinar id lacus eget dictum. Integer ultrices volutpat orci at placerat. Maecenas porta non felis vitae pharetra. Suspendisse.
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}