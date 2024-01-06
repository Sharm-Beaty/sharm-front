import {unstable_setRequestLocale} from "next-intl/server";
import {locales} from "../../../../../i18n/config";

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export default function Page({ params }: { params: { locale: string } }) {
    const {locale} = params;
    unstable_setRequestLocale(locale)
    return (
        <>
            {locale} -  articles
        </>
    );
}
