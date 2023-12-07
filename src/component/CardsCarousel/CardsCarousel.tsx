'use client';
import cls from './CardsCarousel.module.scss';
import { classNames } from '@/helpers';
import { useState, useEffect, useRef, Children } from 'react';
import {
	AnimatePresence,
	HTMLMotionProps,
	PanInfo,
	motion,
	animate,
	useMotionValue,
} from 'framer-motion';
import { ArrowLeft, ArrowRight } from '@/component/svg';
import { CarouselDots } from './CarouselDots';

interface MCardsCarouselProps extends HTMLMotionProps<'section'> {
	className?: string;
	titleCarousel?: string;
	children?: React.ReactNode;
	breakpoints?: CardsCarouselBreakpoints;
}

const swipeConfidenceThreshold = 150;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

let xValue = 0;

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, titleCarousel, breakpoints, children, ...otherProps } = props;
	const section = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const childrenArr = Children.toArray(children);
	let x = useMotionValue(0);
	// TODO Часто свайп відпрацьовує не правильно, він не долистує до краю останього слайду. А якщо використовувати клавіші, якщо швидко клацати можна пролистати за край дозволеного. Наприклад (коли листаємо назад handlePrev) на 275 пікселів хоча має бути не більше 0.
	const handlePrev = async () => {
		if (x.get() >= 0) return;
		xValue += 275;
		setActiveIndex((prev) => (prev -= 1));
		await animate(x, xValue);
	};
	const handleNext = async () => {
		if (x.get() <= -width) return;
		xValue -= 275;
		setActiveIndex((prev) => (prev += 1));
		await animate(x, xValue);
	};

	const onSwipe = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
		const swipe = swipePower(offset.x, velocity.x * 10);

		if (swipe > -swipeConfidenceThreshold) {
			handlePrev();
		} else if (swipe < swipeConfidenceThreshold) {
			handleNext();
		}
	};

	useEffect(() => {
		setWidth(section.current!.scrollWidth - section.current!.offsetWidth);
	}, []);

	return (
		// TODO Не зробив пагінацію для мобільної версії
		<motion.section
			ref={section}
			className={classNames(cls.mCardsCarousel, [className])}
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0}
			onDragEnd={onSwipe}
			{...otherProps}
		>
			<div className={cls.headContainer}>
				<div className={cls.container}>
					<h2 className={cls.mainTitle}>{titleCarousel}</h2>
				</div>
				<CarouselDots
					className={cls.swiperBullets}
					bulletClassName={cls.swiperEachBullet}
					activeBulletClassName={cls.swiperActiveBullet}
					length={childrenArr.length}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
			</div>
			<motion.div
				className={cls.carousel}
				drag='x'
				dragConstraints={{ left: -width, right: 0 }}
				dragElastic={1}
				onDragEnd={onSwipe}
				style={{ display: 'flex', x }}
			>
				<AnimatePresence mode='popLayout'>{children}</AnimatePresence>
			</motion.div>
			<motion.div className={cls.navWrap}>
				<motion.div className={cls.buttonPrev}>
					<ArrowLeft width={27} height={20} onClick={handlePrev} cursor='pointer' />
				</motion.div>
				<motion.div className={cls.buttonNext}>
					<ArrowRight width={27} height={20} onClick={handleNext} cursor='pointer' />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default MCardsCarousel;
