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
	spaceBetween?: number;
	titleCarousel?: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, productsList, titleCarousel, spaceBetween = 75, ...otherProps } = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [data, setData] = useState<Product[]>(productsList);

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
		let endIndex = currentIndex + productsList.length;

		// Wrap around to the beginning
		endIndex = endIndex % productsList.length;

		setData(() => [...productsList.slice(endIndex), ...productsList.slice(0, endIndex)]);
	}, [currentIndex, productsList]);

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
