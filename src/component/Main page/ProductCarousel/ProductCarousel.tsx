import { CardsCarousel } from '@/component/CardsCarousel';
import cls from './ProductCarousel.module.scss';
import { classNames } from '@/helpers';
import { products } from './data/MOCK_DATA';
import { ProductCard } from './ProductCard/ProductCard';

interface ProductCarouselProps {
	className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
	const { className } = props;

	return (
		<>
			<CardsCarousel
				className={classNames(cls.productCarousel, [className])}
				productsList={products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			/>
		</>
	);
};

export default ProductCarousel;
