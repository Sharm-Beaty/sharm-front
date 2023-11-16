'use client';

import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import cls from './Carousel.module.scss';
import { AutoplayOptions, PaginationOptions, SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { slidesDb } from './carouselData';
import { Slide } from './Slide/Slide';
import { classNames } from '@/helpers';

interface CarouselProps extends SwiperOptions {
	className?: string;
}

const Carousel: FC<CarouselProps> = (props) => {
	const { className, ...otherProps } = props;

	const pagination: PaginationOptions = {
		clickable: true,
		el: '.' + cls.pagination,
		bulletClass: `swiper-pagination-bullet ${cls.bullet}`,
		bulletActiveClass: cls.activeBullet,
	};
	const autoplay: AutoplayOptions = {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	};

	return (
		<>
			<Swiper
				className={classNames(cls.swiper, [className])}
				pagination={pagination}
				modules={[Autoplay, Pagination]}
				autoplay={autoplay}
				loop={true}
				speed={1000}
				grabCursor={true}
				slidesPerView={1}
				{...otherProps}
			>
				{slidesDb &&
					slidesDb.map((slide) => (
						<SwiperSlide key={slide.id} className={cls.swiperSlide}>
							<Slide slide={slide} />
						</SwiperSlide>
					))}
			</Swiper>
			<div className={cls.paginationBox}>
				<div className={cls.pagination}></div>
			</div>
		</>
	);
};

export default Carousel;
