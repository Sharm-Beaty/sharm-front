'use client';
import cls from './MCardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../Main page/ProductCarousel/types/types';
import { useState, useEffect } from 'react';
import { MSlide } from './Slide/Slide';
import Controls from './Controls';
import { AnimatePresence, HTMLMotionProps, PanInfo, motion } from 'framer-motion';

interface MCardsCarouselProps extends HTMLMotionProps<'section'> {
	className?: string;
	productsList: Product[];
	slidesPerView?: number;
	spaceBetween?: number;
	titleCarousel?: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const {
		className,
		productsList,
		titleCarousel,
		slidesPerView = 5,
		spaceBetween = 75,
		...otherProps
	} = props;

	// if (slidesPerView > productsList.length) {
	// 	slidesPerView = productsList.length - 1;
	// }
	const [currentIndex, setCurrentIndex] = useState(0);
	const productsInView = productsList.slice(0, slidesPerView);
	const [data, setData] = useState<Product[]>(productsInView);

	const handlePrev = () =>
		setCurrentIndex((prev) => (prev - 1 + productsList.length) % productsList.length);
	const handleNext = () => setCurrentIndex((prev) => (prev + 1) % productsList.length);

	const onSwipe = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
		const swipe = swipePower(offset.x, velocity.x * 10);

		if (swipe > -swipeConfidenceThreshold) {
			handlePrev();
		} else if (swipe < swipeConfidenceThreshold) {
			handleNext();
		}
	};

	useEffect(() => {
		let endIndex = currentIndex + slidesPerView;

		if (endIndex > productsList.length) {
			// If yes, wrap around to the beginning
			endIndex = endIndex - productsList.length;
			// Display productsList from currentIndex to the end and then from the beginning to fill up to slidesPerView
			setData(() => [...productsList.slice(currentIndex), ...productsList.slice(0, endIndex)]);
		} else {
			// Display productsList normally
			setData(() => productsList.slice(currentIndex, endIndex));
		}
	}, [currentIndex, productsList, slidesPerView]);

	return (
		<motion.section className={classNames(cls.mCardsCarousel, [className])} {...otherProps}>
			<div className={cls.container}>
				<h2 className={cls.mainTitle}>{titleCarousel}</h2>
			</div>
			<motion.div
				className={cls.carousel}
				drag='x'
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={false}
				onDragEnd={onSwipe}
			>
				<AnimatePresence mode='popLayout'>
					{data.map((data) => {
						return <MSlide key={data.img} product={data} />;
					})}
				</AnimatePresence>
			</motion.div>
			<Controls handlePrev={handlePrev} handleNext={handleNext} />
		</motion.section>
	);
};

export default MCardsCarousel;
