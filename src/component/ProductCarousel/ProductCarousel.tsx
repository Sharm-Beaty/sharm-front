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

	//TODO не вийшло реалізувати адаптацію через JS. Розрахунок ширини карточки продукту я зробив, але в залежності від ширини екрану не вийшло.

	/* TODO Для слайдів необхідно при будь якій зміні ширини батьківського елементу перераховувати ширину. Якщо ширина слайду вказана не в пікселях, текст в середині слайду не буде правильно відображатися. */

	/* ----------------------- Розрахунок ширини карточки який я зміг реалізувати ----------------------- */
	// useEffect(() => {
	// 	const calculateCardWidth = () => {
	// 		const totalGapWidth = spaceBetween * (slidesPerView - 1);
	// 		const availableWidth = parentWidth - totalGapWidth;
	// 		return availableWidth / slidesPerView;
	// 	};

	// 	const updateCardWidth = () => {
	// 		if (section.current) {
	// 			const newParentWidth = section.current.clientWidth;
	// 			setParentWidth(newParentWidth);
	// 			setCardWidth(() => calculateCardWidth());
	// 		}
	// 	};

	// 	window.addEventListener('resize', updateCardWidth);

	// 	// Initial calculation when the component mounts
	// 	updateCardWidth();

	// 	return () => {
	// 		window.removeEventListener('resize', updateCardWidth);
	// 	};
	// }, [spaceBetween, slidesPerView, parentWidth, section]);

	return (
		<CardsCarousel className={classNames(cls.mProductCarousel, [className])} {...otherProps}>
			{products.map((product) => (
				<MProductCard className={cls.productCards} key={product.id} product={product} />
			))}
		</CardsCarousel>
	);
};

export default ProductCarousel;
