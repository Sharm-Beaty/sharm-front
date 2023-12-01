import { CardsCarousel } from '@/component/CardsCarousel';
import cls from './ProductCarousel.module.scss';
import { classNames } from '@/helpers';
import { products } from '@/mock';
import { ProductCard } from './ProductCard/ProductCard';
import { swiperConfig } from '@/component/CardsCarousel/swiperConfig';

interface ProductCarouselProps {
	className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
	const { className } = props;

	return (
		<>
			<CardsCarousel
				className={classNames(cls.productCarousel, [className])}
				titleCarousel='Акційні пропозиції'
				breakpoints={swiperConfig.breakpoints}
				slidesPerView={5}
				spaceBetween={75}
				productsList={products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			/>
		</>
	);
};

export { ProductCarousel };
