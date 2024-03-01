'use client';
import CardsCarousel from '@/component/CardsCarousel';
import { MProductCard } from '@/component/ProductCard';
import cls from './ProductCarousel.module.scss';
import { classNames } from '@/helpers';

interface ProductCarouselProps {
	className?: string;
	products: DiscountedProducts[];
	titleCarousel?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
	const { className, titleCarousel, products, ...otherProps } = props;

	return (
		<CardsCarousel
			className={classNames(cls.mProductCarousel, [className])}
			titleCarousel={titleCarousel}
			{...otherProps}
		>
			{products.map((product) => (
				<MProductCard className={cls.productCards} key={product.id} product={product} />
			))}
		</CardsCarousel>
	);
};

export default ProductCarousel;
