'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import cls from './CardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { AutoplayOptions, NavigationOptions, SwiperOptions } from 'swiper/types';
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

	const navigation: NavigationOptions = {
		prevEl: '.' + cls.buttonPrev,
		nextEl: '.' + cls.buttonNext,
	};

	const autoplay: AutoplayOptions = {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	};

	return (
		<>
			<section className={classNames(cls.carouselWrap, [className])}>
				<div className={cls.container}>
					<h2 className={cls.mainTitle}>{titleCarousel}</h2>
				</div>
				<Swiper
					className={classNames(cls.cardsCarousel)}
					modules={[Autoplay, Navigation]}
					navigation={navigation}
					autoplay={autoplay}
					spaceBetween={75}
					loop={true}
					speed={1000}
					grabCursor={true}
					slidesPerView={5}
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
