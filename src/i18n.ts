import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";
import {locales} from '../i18n/config';



export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as any)) notFound();
    const messages = {
        ...(await import(`../messages/${locale}.json`)).default,
        ...(await import(`../messages/${locale}/allCategories.json`)).default
    };
    return {
        messages
    };
});