'use client';
import { motion } from 'framer-motion';
import cls from './MCardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../Main page/ProductCarousel/types/types';
import { useEffect, useRef, useState } from 'react';

interface MCardsCarouselProps {
	className?: string;
	productsList: Product[];
}

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, productsList, ...otherProps } = props;
	const [width, setWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>();

	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, []);

	return (
		<>
			<motion.div
				ref={carousel}
				className={classNames(cls.mCardsCarousel, [className])}
				{...otherProps}
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className={cls.innerCarousel}
				>
					{productsList.map((product) => {
						return (
							<motion.div className={cls.item} key={product.id}>
								<img src={product.img} alt='' />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</>
	);
};

export { MCardsCarousel };
