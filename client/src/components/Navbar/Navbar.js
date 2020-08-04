import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles(theme => ({
  nav: {
    zIndex: "1",
    position: "fixed",
    width: "100vw",

  },
  toolbar: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "white", 
    backgroundColor: "none",
  },
  toolbar2: {
    display: "flex", 
    justifyContent: "space-between", 
    color: "black", 
    backgroundColor: "white"
  },
  appBar: {
    position: "fixed",
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  appBar2: {
    position: "fixed",
    backgroundColor: "transparent"
  }
  // offset: theme.mixins.toolbar
}));

const Navbar = (props) => {
  const trigger = useScrollTrigger();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();


  return(
    // <React.Fragment>
      <nav className={classes.nav}>
      <AppBar className={trigger ? classes.appBar2 : classes.appBar}>
        <Toolbar className={trigger ? classes.toolbar2 : classes.toolbar}>
          <IconButton style={{font: "initial"}} color="inherit">
            <p>Atlas Jams</p>
          </IconButton>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      </nav>
      // <div className={classes.offset} />
    // </React.Fragment>
  )
};

export default Navbar
