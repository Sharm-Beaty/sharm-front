import mockCategories from "@/component/CategorySelector/src/mock";
import {CategorySelector} from "@/component/CategorySelector";

export default async function Home() {
    return (
        <main>
            <CategorySelector  categories={mockCategories} className={'category-selector'} />
        </main>
    )
}

