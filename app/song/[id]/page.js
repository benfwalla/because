import axios from 'axios';

import * as schema from '/db/schema';
import { drizzle, asc } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

import SongPage from './song-page';


async function getGeniusInfoById(id) {

  try {
    const accessToken = process.env.GENIUS_ACCESS_TOKEN;
    const response = await axios.get(`https://api.genius.com/songs/${id}?access_token=${accessToken}`);
    const songData = {
      id: response.data.response.song.id,
      title: response.data.response.song.title,
      artist_names: response.data.response.song.artist_names,
      song_art_image_thumbnail_url: response.data.response.song.song_art_image_thumbnail_url,
      producer_artists: response.data.response.song.producer_artists,
      release_date_for_display: response.data.response.song.release_date_for_display,
    };

    return songData;
  } catch (error) {
    console.error('Error fetching song data:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  });

  const db = drizzle(connection, { schema });

  let songIds = [];
  try {
    songIds = await db.select({ id: schema.songs.id }).from(schema.songs);
  } catch (error) {
    console.error('Error fetching songs:', error);
  }

  // Conveert Ids to strings
  songIds = songIds.map((song) => ({ id: song.id.toString() }));

  return songIds;
}

export default async function Page({ params }) {

  const songData = await getGeniusInfoById(params.id);

  return <SongPage songData={songData} />
}




