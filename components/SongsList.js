import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

function SongsList({ songs }) {

  return (
    <Box>
      <Typography variant="h4" gutterBottom className="text-3xl font-bold">Songs</Typography>
      <Grid container spacing={2}>
        {songs.map((song) => (
          <Grid item xs={12} sm={6} lg={4} key={song.id}>
            <Link href={`/song/${song.id}`}>
              <Paper sx={{ padding: 2, cursor: 'pointer' }}>
                <Typography variant="h5">{song.name}</Typography>
                <Typography variant="subtitle1">{song.artist}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


export default SongsList;