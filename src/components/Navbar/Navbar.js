import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';

const Navbar = () => (
  <AppBar position="sticky" className="Navbar">
    <Toolbar className="Navbar__Toolbar">
      <div className="Navbar__Col"></div>
      <div className="Navbar__Col">
        <Typography variant="h6">Clara Callejo</Typography>
      </div>
      <div className="Navbar__Col">
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default Navbar;
