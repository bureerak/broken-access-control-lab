import { jwtVerify } from "jose";

export async function verifyToken(session: string | undefined) {
    if (session) {
        try {
            const { payload } = await jwtVerify(session,new TextEncoder().encode('dev_secret_key'));
            return payload;
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }
}