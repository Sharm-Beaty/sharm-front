import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";
import {locales} from '../i18n/config';

// Can be imported from a shared config
// export const locales = ['en', 'ua', 'ru'];

export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as any)) notFound();
    const messages = {
        ...(await import(`../messages/${locale}.json`)).default,
        ...(await import(`../messages/${locale}/allCategories.json`)).default
        // allCategories: (await import(`../messages/${locale}/allCategories.json`)).default
    };
    return {
        // messages: (await ( locale === 'ua' ?
        //     import('../messages/ua.json') :
        //     import(`../messages/${locale}.json`))
        // ).default
        messages
    };
});