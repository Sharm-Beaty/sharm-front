import {getRequestConfig} from 'next-intl/server';
import {locales} from '../i18n/config';


const default_locale = 'ua';
export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as any)) locale = default_locale;
    const messages = {
        ...(await import(`../messages/${locale}.json`)).default,
        ...(await import(`../messages/${locale}/allCategories.json`)).default
    };
    return {
        messages
    };
});