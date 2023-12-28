import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

function TopAppBar() {
  return (
    <AppBar position="fixed" sx={{ background: '#FFEB3B' }}>
      <Toolbar>
        
        <Link href="/">
          <IconButton sx={{ p: '10px' }} aria-label="home">
            <HomeIcon />
          </IconButton>
        </Link>
        
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: '2px solid grey',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          transition: 'background-color 0.2s ease'
        }}>
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ width: 240 }}
            placeholder="Search lyrics"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;