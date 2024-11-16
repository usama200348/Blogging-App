import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { signOutUser } from '../../Firebase/FirebaseMethod';
import './nav.css'

const Navbar = () => {
  const [user, setUser] = useState(true);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppBar position="sticky" sx={{background:"#7749f8", width: '100%'}}>
      <Toolbar>
        {/* App Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            flexGrow: 1,
            fontWeight: 'bold',
          }}
        >
          Blogging App
        </Typography>

        {/* User Dropdown */}
        {user ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography component={Link} to="/dashboard" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography sx={{ textDecoration: 'none', color: 'inherit' }}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/login"
            sx={{ color: 'white', borderColor: 'white' }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
