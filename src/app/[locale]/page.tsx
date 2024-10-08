import mockCategories from '@/mock/mockForPopularCategories';
import PopularCategories from '@/component/PopularCategories/PopularCategories';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FC } from 'react';
import MainSwiper from '@/component/MainSwiper/MainSwiper';
import ProductCarousel from '@/component/ProductCarousel';
import { products } from '@/mock';
import FAQ from "@/component/FAQ";

interface HomeProps {
	params: {
		locale: string;
	};
}

const Home: FC<HomeProps> = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);

	return (
		<>
			<MainSwiper />
			<PopularCategories
				locale={locale}
				categories={mockCategories}
				className={'popular-categories'}
			/>
			<ProductCarousel titleCarousel='Акційні пропозиції' products={products} />
			<FAQ/>
		</>
	);
};

export default Home;
