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
        '/(ua|ru|en)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};
