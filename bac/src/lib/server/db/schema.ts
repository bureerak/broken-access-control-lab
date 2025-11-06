import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('user', {
	id: integer('id').primaryKey(),
	name: text('name'),
	email: text('email').unique(),
	password: text('password'),
});
