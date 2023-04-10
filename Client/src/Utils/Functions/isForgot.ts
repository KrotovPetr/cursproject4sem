import { getCookie } from './getCookie';

export function isForgot(): boolean {
    return getCookie('forgot') === undefined;
}
