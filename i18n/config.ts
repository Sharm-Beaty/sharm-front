import {Pathnames} from 'next-intl/navigation';
import {AllLocales} from "next-intl/dist/types/src/shared/types";
type localesObjectType = {
    [key: string]: string
}
export const localesObject: localesObjectType = {
    ua: 'ua',
    ru: 'ru'
};
export const locales: AllLocales = Object.values(localesObject) as string[];

export const pathnames = {
    '/': '/',
    '/pathnames': {
        ua: '/pathnamesua',
        ru: '/pathnamesru',
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
