'use client';
import cls from './MCardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../Main page/ProductCarousel/types/types';
import React, { useState } from 'react';
import { MSlide } from './Slide/Slide';
import Controls from './Controls';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

interface MCardsCarouselProps extends HTMLMotionProps<'section'> {
	className?: string;
	productsList: Product[];
	slidesPerView: number;
	spaceBetween?: number;
}

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, productsList, spaceBetween = 75, ...otherProps } = props;
	let { slidesPerView = 5 } = props;

	if (slidesPerView > productsList.length) {
		slidesPerView = productsList.length - 1;
	}

	const [currentIndex, setCurrentIndex] = useState(0);
	const productsInView = productsList.slice(0, slidesPerView + 1);
	const [data, setData] = React.useState<Product[]>(
		productsList.slice(0, productsInView.length - 1),
	);

	return (
		<motion.section className={classNames(cls.mCardsCarousel, [className])} {...otherProps}>
			<h2 className={cls.mainTitle}>Framer Motion Carousel</h2>
			<motion.div className={cls.carousel}>
				<AnimatePresence mode='popLayout'>
					{data.map((data) => {
						return <MSlide key={data.img} product={data} />;
					})}
				</AnimatePresence>
			</motion.div>
			<Controls
				data={data}
				handleData={setData}
				sliderData={productsList}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				slidesPerView={slidesPerView}
			/>
		</motion.section>
	);
};

export default MCardsCarousel;
