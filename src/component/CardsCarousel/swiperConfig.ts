import cls from './CardsCarousel.module.scss';
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperOptions } from 'swiper/types';

interface SwiperBreakpoint {
	[width: number]: SwiperOptions;
	[ratio: string]: SwiperOptions;
}

export const swiperBreakpoints: SwiperBreakpoint = {
	100: {
		slidesPerView: 1,
		spaceBetween: 0,
	},
	320: {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	480: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	550: {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	600: {
		slidesPerView: 3,
		spaceBetween: 30,
	},
	750: {
		slidesPerView: 4,
		spaceBetween: 30,
	},
	1000: {
		slidesPerView: 5,
		spaceBetween: 40,
	},
	1200: {
		slidesPerView: 5,
		spaceBetween: 75,
	},
};

const navigation: NavigationOptions = {
	prevEl: '.' + cls.buttonPrev,
	nextEl: '.' + cls.buttonNext,
	disabledClass: cls['swiper-button-disabled'],
};

const autoplay: AutoplayOptions = {
	delay: 3000,
	disableOnInteraction: false,
	pauseOnMouseEnter: true,
};

const pagination: PaginationOptions = {
	clickable: true,
	el: '.' + cls.swiperBullets,
	bulletActiveClass: cls.swiperActiveBullet,
	renderBullet: function (index, className) {
		return `<span class="${className} ${cls.swiperEachBullet}"></span>`;
	},
};

export const swiperConfig: SwiperOptions = {
	navigation: navigation,
	autoplay: autoplay,
	breakpoints: swiperBreakpoints,
	pagination: pagination,
};
