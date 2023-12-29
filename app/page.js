import TopAppBar from '/components/TopAppBar';
import SongsList from '/components/SongsList';

import * as schema from '/db/schema';
import { drizzle, asc } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

async function getSongs() {
  const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  });

  const db = drizzle(connection, { schema });

  let songs = [];
  try {
    songs = await db.select().from(schema.songs).orderBy((schema.songs.artist));
  } catch (error) {
    console.error('Error fetching songs:', error);
  }

  return songs;
}

export default async function Page() {
  const songs = await getSongs();

  return (
    <div>
      <TopAppBar />
      <div style={{ paddingTop: '16px' }}>
        <SongsList songs={songs} />
      </div>
    </div>
  );
}

