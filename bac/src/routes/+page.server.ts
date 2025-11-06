import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db/index';
import { users } from '$lib/server/db/schema';

export const load : PageServerLoad = async (event) => {
    const allUsers = await db.select().from(users);
    if (allUsers.length === 0) {
        await db.insert(users).values([
            { name: 'copter', email: 'copter@kmitl.ac.th', password: 'p@ssword' },
            { name: 'toby', email: 'toby@kmitl.ac.th', password: 'tobynaja'},
            { name: 'tony', email: 'tony@kmitl.ac.th', password: 'tonynaja' }
        ]);
    }
    // return { users: allUsers };
}

export const actions: Actions = {
    login: async (event) => {
        const formData = await event.request.formData();
        const email = formData.get('email') || "";
        const password = formData.get('password') || "";
        const user = await db.select().from(users).where(eq(users.email, email?.toString())).limit(1);
        if (user.length === 0 || user[0].password !== password) {
            throw error(401, 'Invalid email or password');
        }
        return {
            success: true
        }
        // console.log('User logged in:', user[0]);
    }
}