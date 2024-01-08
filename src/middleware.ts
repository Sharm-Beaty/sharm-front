import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from '../i18n/config';


export default createMiddleware({
    defaultLocale: 'ua',
    locales,
    pathnames,
    localePrefix
});

export const config = {
    matcher: [
        '/',
        '/(ua|ru)/:path*',
        '/favicon.ico',
        '/favicon.ico.json', // temp solution
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};