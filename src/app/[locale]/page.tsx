import mockCategories from "@/mock/mockForPopularCategories";
import PopularCategories from "@/component/PopularCategories/PopularCategories";
import {unstable_setRequestLocale} from "next-intl/server";
import {FC} from 'react';

interface HomeProps {
    params: {
        locale: string;
    };
}

const Home:FC<HomeProps> = async ({params: {locale}} ) => {
    unstable_setRequestLocale(locale);

    return (
        <>
            <PopularCategories locale={locale} categories={mockCategories} className={'popular-categories'}/>
        </>
    )
};

export default Home