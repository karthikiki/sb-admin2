import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Paper, Tooltip, Typography } from '@mui/material';
import React from 'react'



export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='nav-bar'>
   <div className='search-bar'>
     <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
      />
    </Paper>
   </div>
    <div className='profile'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <Tooltip title="Account settings">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>K</Avatar>
      </IconButton>
    </Tooltip>
  </Box>
  <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
  >
    <MenuItem onClick={handleClose}>
      <Avatar /> Profile
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <Avatar /> My account
    </MenuItem>
    <Divider />
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
      Add another account
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Settings fontSize="small" />
      </ListItemIcon>
      Settings
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  </Menu>
  </div>
</div>  
  )
}

