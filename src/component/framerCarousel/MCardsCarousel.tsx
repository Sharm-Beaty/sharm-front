'use client';
import cls from './MCardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../Main page/ProductCarousel/types/types';
import React from 'react';
import Slide from './Slide/Slide';
import Controls from './Controls';
import { HTMLMotionProps, motion } from 'framer-motion';

interface MCardsCarouselProps extends HTMLMotionProps<'section'> {
	className?: string;
	productsList: Product[];
}

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, productsList, ...otherProps } = props;

	const [data, setData] = React.useState<Product[]>(productsList.slice(0, productsList.length - 1));
	const [transitionData, setTransitionData] = React.useState<Product>(
		productsList[productsList.length - 1],
	);

	return (
		<motion.section className={classNames(cls.mCardsCarousel, [className])}>
			<h2 className={cls.mainTitle}>Framer Motion Carousel</h2>
			<div className={cls.carousel}>
				{data.map((data) => {
					return <Slide key={data.img} product={data} />;
				})}
			</div>
			<Controls
				data={data}
				transitionData={transitionData}
				initData={productsList[0]}
				handleData={setData}
				handleTransitionData={setTransitionData}
				sliderData={productsList}
			/>
		</motion.section>
	);
};

export default MCardsCarousel;
