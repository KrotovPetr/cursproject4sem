import {getCookie} from "./getCookie";

export function isAuth(): boolean {
    return getCookie('accessToken') !== undefined;
}