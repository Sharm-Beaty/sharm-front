'use client';
import CardsCarousel from '@/component/CardsCarousel';
import { MProductCard } from '@/component/ProductCard';
import cls from './ProductCarousel.module.scss';
import { classNames } from '@/helpers';
import { products } from '@/mock';

interface ProductCarouselProps {
	className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
	const { className, ...otherProps } = props;

	return (
		<CardsCarousel className={classNames(cls.mProductCarousel, [className])} {...otherProps}>
			{products.map((product) => (
				<MProductCard className={cls.productCards} key={product.id} product={product} />
			))}
		</CardsCarousel>
	);
};

export default ProductCarousel;
