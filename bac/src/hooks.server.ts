import { redirect, type Handle } from "@sveltejs/kit";
import { verifyToken } from "./lib/auth.js";

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    const payload = await verifyToken(session);

    if (payload) {
        event.locals.user = { id: Number(payload.userId), name: String(payload.name) };
    } else {
        event.locals.user = null;
    }

    const response =  await resolve(event);
    return response;
}
