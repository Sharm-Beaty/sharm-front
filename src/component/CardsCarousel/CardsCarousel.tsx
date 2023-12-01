'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import cls from './CardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { swiperConfig } from './swiperConfig';
import { ArrowLeft } from '../svg/CardsCarousel/arrowLeft';
import { ArrowRight } from '../svg/CardsCarousel/arrowRight';

interface CardsCarouselProps extends SwiperOptions {
	className?: string;
	classNameForNavigation?: string;
	classNameForSlide?: string;
	titleCarousel: string;
	productsList: ReactNode[];
}

const CardsCarousel: FC<CardsCarouselProps> = (props) => {
	const {
		className,
		classNameForSlide,
		classNameForNavigation,
		productsList,
		titleCarousel,
		...otherProps
	} = props;

	const [products, setProducts] = useState(productsList);

	useEffect(() => {
		setProducts(productsList);
	}, [productsList]);

	return (
		<>
			<section className={classNames(cls.carouselWrap, [className])}>
				<div className={cls.headContainer}>
					<div className={cls.container}>
						<h2 className={cls.mainTitle}>{titleCarousel}</h2>
					</div>
					<div className={cls.swiperBullets}></div>
				</div>
				<Swiper
					className={classNames(cls.cardsCarousel)}
					modules={[Autoplay, Navigation, Pagination]}
					navigation={swiperConfig.navigation}
					pagination={swiperConfig.pagination}
					{...otherProps}
				>
					{products &&
						products.map((el, i) => (
							<SwiperSlide key={i} className={classNames(cls.swiperSlide, [classNameForSlide])}>
								{el}
							</SwiperSlide>
						))}
				</Swiper>
				<div className={classNames(cls.navWrap, [classNameForNavigation])}>
					<div className={cls.buttonPrev}>
						<ArrowLeft width={27} height={20} cursor='pointer' />
					</div>
					<div className={cls.buttonNext}>
						<ArrowRight width={27} height={20} cursor='pointer' />
					</div>
				</div>
			</section>
		</>
	);
};

export default CardsCarousel;
