import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, text } from "drizzle-orm/mysql-core"

export const songs = mysqlTable("songs", {
	id: int("id").notNull(),
	name: varchar("name", { length: 255 }),
	artist: varchar("artist", { length: 255 }),
	lyrics: text("lyrics"),
},
(table) => {
	return {
		songsId: primaryKey({ columns: [table.id], name: "songs_id"}),
	}
});