'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import TopAppBar from '/components/TopAppBar';
import { formatProducerNames } from '/utils/helper';


export default async function SongPage({ songData }) {
  
    return (
      <div>
        <TopAppBar />
        <Box sx={{ paddingTop: '64px' }}>
          {songData && (
            <Card sx={{ padding: '16px' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <img src={songData.song_art_image_thumbnail_url} alt="Song Thumbnail" style={{ paddingRight: '16px', maxWidth: '200px', minWidth: '120px' }} />
                <Box>
                  <Typography variant="h4" >{songData.title}</Typography>
                  <Typography variant="h6" gutterBottom>by {songData.artist_names}</Typography>
                  {songData.producer_artists && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <HeadphonesIcon sx={{ fontSize: 'inherit', marginRight: '4px' }} />
                      <Typography variant="body2">Produced by: {formatProducerNames(songData.producer_artists)}</Typography>
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarMonthIcon sx={{ fontSize: 'inherit', marginRight: '4px' }} />
                    <Typography variant="subtitle2" component="span">
                      {songData.release_date_for_display}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          )}
          <Typography variant="body1">Here are the lyrics for {songData.title}... lorem ipsum</Typography>
        </Box>
      </div>
  
    );
  }
  