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
}

const swipeConfidenceThreshold = 150;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const MCardsCarousel: React.FC<MCardsCarouselProps> = (props) => {
	const { className, titleCarousel, children, ...otherProps } = props;
	const section = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const [xValue, setXValue] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const amountOfCards = Children.toArray(children).length - 1;
	const x = useMotionValue(0);

	const handlePrev = async () => {
		if (xValue >= 0) return;

		setXValue((prev) => (prev += 275));
		setActiveIndex((prev) => (prev -= 1));
		await animate(x, xValue);
	};

	const handleNext = async () => {
		if (xValue <= -width) return;

		setXValue((prev) => (prev -= 275));
		setActiveIndex((prev) => (prev += 1));
		await animate(x, xValue);
	};

	const onSwipe = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
		const swipe = swipePower(offset.x, velocity.x * 10);

		if (swipe > -swipeConfidenceThreshold) {
			handlePrev();
		}

		if (swipe < swipeConfidenceThreshold) {
			handleNext();
		}
	};

	useEffect(() => {
		const translateX = activeIndex * -275;
		const duration = 0.2 * Math.abs((translateX - xValue) / 275) || 1;

		setXValue(translateX);
		animate(x, xValue, { duration });
	}, [activeIndex, x, xValue]);

	useEffect(() => {
		setWidth(section.current!.scrollWidth - section.current!.offsetWidth);
	}, []);

	return (
		<motion.section
			ref={section}
			className={classNames(cls.mCardsCarousel, [className])}
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0.0001}
			onDragEnd={onSwipe}
			{...otherProps}
		>
			<div className={cls.headContainer}>
				<div className={cls.container}>
					<h4 className={cls.mainTitle}>{titleCarousel}</h4>
				</div>
				<CarouselDots
					className={cls.swiperBullets}
					bulletClassName={cls.swiperEachBullet}
					activeBulletClassName={cls.swiperActiveBullet}
					length={amountOfCards}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
			</div>
			<motion.div className={cls.carousel} style={{ x }}>
				<AnimatePresence mode='popLayout'>{children}</AnimatePresence>
			</motion.div>
			<motion.div className={cls.navWrap}>
				<motion.div
					className={classNames(cls.buttonPrev, [], {
						[cls.disabled]: activeIndex === 0,
					})}
				>
					<ArrowLeft width={27} height={20} onClick={handlePrev} cursor='pointer' />
				</motion.div>
				<motion.div
					className={classNames(cls.buttonNext, [], {
						[cls.disabled]: activeIndex === amountOfCards || xValue <= -width,
					})}
				>
					<ArrowRight width={27} height={20} onClick={handleNext} cursor='pointer' />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default MCardsCarousel;
