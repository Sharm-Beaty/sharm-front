import mockCategories from "@/mock/mockForPopularCategories";
import PopularCategories from "@/component/PopularCategories/PopularCategories";

export default async function Home() {
    return (
        <PopularCategories categories={mockCategories} className={'popular-categories'}/>
    )
}

