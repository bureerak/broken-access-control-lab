import { error, json, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db/index';
import { users } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ( {url, locals} ) => {
    const id = Number(url.searchParams.get('id') ?? '0');

    if (!locals.user) {
        return error(403, 'Forbidden');
    }

    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    if (user.length === 0) {
        throw error(404, 'User not found');
    }

    return json({ id: id, name: user[0].name, email: user[0].email });
};