import { HTMLMotionProps, motion } from 'framer-motion';
import React, { ComponentType, PropsWithChildren, RefAttributes, forwardRef } from 'react';
import { classNames } from '@/helpers';

interface DotProps extends HTMLMotionProps<'div'> {
	className?: string;
	bulletClassName?: string;
	activeBulletClassName?: string;
	length: number;
	activeIndex: number;
	setActiveIndex: (index: number) => void;
}

const CarouselDots: ComponentType<PropsWithChildren<DotProps & RefAttributes<HTMLDivElement>>> =
	forwardRef(function Dots(
		{
			className,
			bulletClassName,
			activeBulletClassName,
			length,
			activeIndex,
			setActiveIndex,
			...otherProps
		},
		ref,
	) {
		return (
			<motion.div layout className={classNames('', [className])} ref={ref} {...otherProps}>
				{new Array(length).fill('').map((_, i) => (
					<motion.span
						className={classNames('', [bulletClassName], {
							[activeBulletClassName!]: i === activeIndex,
						})}
						onClick={() => setActiveIndex(i)}
						key={i}
						layoutId={i.toString()}
					></motion.span>
				))}
			</motion.div>
		);
	});

const MCarouselDots = motion(CarouselDots);

export { CarouselDots, MCarouselDots };
