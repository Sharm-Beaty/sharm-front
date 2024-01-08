import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";
import {locales} from '../i18n/config';
import NotFound from "@/app/not-found";


const default_locale = 'ua';
export default getRequestConfig(async ({locale}) => {
    // if (!locales.includes(locale as any)) NotFound();
    if (!locales.includes(locale as any)) locale = default_locale;
    const messages = {
        ...(await import(`../messages/${locale}.json`)).default,
        ...(await import(`../messages/${locale}/allCategories.json`)).default
    };
    return {
        messages
    };
});