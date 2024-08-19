"use server";
import { cookies } from "next/headers"

async function loadCookie(key: string = "INV_NEXT_TOKEN") {
    return cookies().get(key)?.value;
}

async function saveCookie(key: string = "INV_NEXT_TOKEN", value: string) {
    cookies().set(key, value);
}

async function deleteCookie(key: string) {
    cookies().delete(key);
}

async function decriptToken(token: string) {
    return token;
}


export {
    loadCookie,
    saveCookie,
    deleteCookie
}

