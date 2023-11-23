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
	productsList: ReactNode[];
}

const CardsCarousel: FC<CardsCarouselProps> = (props) => {
	const { className, classNameForSlide, classNameForNavigation, productsList, ...otherProps } =
		props;
	const [products, setProducts] = useState(productsList);

	useEffect(() => {
		setProducts(productsList);
	}, [productsList]);

	const navigation: NavigationOptions = {
		prevEl: '.button-prev',
		nextEl: '.button-next',
	};

	const autoplay: AutoplayOptions = {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	};

	return (
		<>
			<section className={classNames(cls.carouselWrap, [className])}>
				<Swiper
					className={classNames(cls.cardsCarousel)}
					modules={[Autoplay, Navigation]}
					navigation={navigation}
					// autoplay={autoplay}
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
				<div className={classNames(cls['nav-wrap'], [classNameForNavigation])}>
					<div className={cls['button-prev']}>
						<ArrowLeft width={30} cursor='pointer' />
					</div>
					<div className='button-next'>
						<ArrowRight width={30} cursor='pointer' />
					</div>
				</div>
			</section>
		</>
	);
};

export default CardsCarousel;
