import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';

import { getSession } from '@auth0/nextjs-auth0';

export default async function TopAppBar() {
  const userSession = await getSession();

  let name, givenName, familyName, email, picture;

  if (userSession) {
    name = userSession.user.name;
    givenName = userSession.user.given_name;
    familyName = userSession.user.family_name;
    email = userSession.user.email;
    picture = userSession.user.picture;
  }

  return (
    <AppBar position="fixed" sx={{ background: '#FFEB3B' }}>
      <Toolbar>

        <Link href="/">
          <IconButton sx={{ p: '10px' }} aria-label="home">
            <HomeIcon />
          </IconButton>
        </Link>

        <Box sx={{ flexGrow: .05 }} />

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
            placeholder="Search Lyrics"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {!userSession ? (
          <a href="/api/auth/login">
            <Button variant="outlined" startIcon={<LoginIcon />}>Login</Button>
          </a>
        ) : (

          <Stack direction="row" spacing={2} alignItems={'center'}>
            <Avatar alt={name} src={picture} />
            <p>Hi, {givenName}</p>
            <a href="/api/auth/logout">
              <Button variant="outlined" startIcon={<LogoutIcon />} >Logout</Button>
            </a>
          </Stack>

        )}


      </Toolbar>
    </AppBar>
  );
}
