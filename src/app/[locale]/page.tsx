import mockCategories from "@/mock/mockForPopularCategories";
import PopularCategories from "@/component/PopularCategories/PopularCategories";
import {unstable_setRequestLocale} from "next-intl/server";
import {FC} from 'react';
import MainSwiper from "@/component/MainSwiper/MainSwiper";

interface HomeProps {
    params: {
        locale: string;
    };
}

const Home: FC<HomeProps> = async ({params: {locale}}) => {
    unstable_setRequestLocale(locale);

    return (
        <>
            <MainSwiper/>
            <PopularCategories locale={locale} categories={mockCategories} className={'popular-categories'}/>
        </>
    )
};

export default Home