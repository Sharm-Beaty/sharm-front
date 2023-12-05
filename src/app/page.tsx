import mockCategories from "@/mock/mockForPopularCategories";
import PopularCategories from "@/component/PopularCategories/PopularCategories";
import {AdvertisingBlock} from "@/component/Advertising/AdvertisingBlock";
import {mockAds} from "@/mock/mockForAdvertisingBlock";

export default async function Home() {
    return (
        <main>
            <AdvertisingBlock advertisings={mockAds}/>
            <PopularCategories  categories={mockCategories} className={'popular-categories'} />

        </main>
    )
}

