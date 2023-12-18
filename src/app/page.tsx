import mockCategories from "@/mock/mockForPopularCategories";
import PopularCategories from "@/component/PopularCategories/PopularCategories";
import {headers} from 'next/headers'

export default async function Home() {
    const initialViewport = headers().get('viewport')

    return (
        <>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
            <PopularCategories categories={mockCategories} className={'popular-categories'}/>
        </>
    )
};

