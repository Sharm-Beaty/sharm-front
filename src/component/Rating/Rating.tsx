'use client';
import { ReactNode, useState, lazy } from 'react';
import cls from './Rating.module.scss';
import { classNames } from '@/helpers';

const Star = lazy(() => import('./Star/Star'));

interface RatingProps {
	className?: string;
}

const Rating: React.FC<RatingProps> = (props) => {
	const { className, ...otherProps } = props;
	const [rating, setRating] = useState<number>(0);
	const [hoverAt, setHoverAt] = useState<number | null>(null);

	const handleMouseOver = (idx: number) => {
		setHoverAt(idx + 0.5);
	};

	const handleMouseOut = () => {
		setHoverAt(null);
	};

	const handleClick = (idx: number) => {
		const newRating = idx + 0.5;
		setRating(newRating);
		console.log('My rating is: ' + newRating);
		console.log('clicked');
	};

	const stars: ReactNode[] = [];
	for (let i = 0; i < 5; i += 0.5) {
		const currentRating = hoverAt !== null ? hoverAt : rating;
		const selected = i < currentRating;

		stars.push(
			<Star
				key={i}
				selected={selected}
				onMouseOver={() => handleMouseOver(i)}
				onMouseOut={handleMouseOut}
				onClick={() => handleClick(i)}
				indexVal={i}
			/>,
		);
	}

	return (
		<div className={classNames(cls.rating, [className])} {...otherProps}>
			{stars}
		</div>
	);
};

export default Rating;
