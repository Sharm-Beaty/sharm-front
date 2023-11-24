'use client';
import { ReactNode, useState, lazy } from 'react';
import cls from './Rating.module.scss';
import { classNames } from '@/helpers';

const Star = lazy(() => import('./Star/Star'));

interface RatingProps {
	className?: string;
	canSetRating?: boolean;
	ratingNumber?: number;
}

const Rating: React.FC<RatingProps> = (props) => {
	const { className, canSetRating = false, ratingNumber = -1, ...otherProps } = props;
	const [rating, setRating] = useState<number>(Math.floor(ratingNumber));
	const [hoverAt, setHoverAt] = useState<number | null>(null);

	const handleMouseOver = (idx: number) => canSetRating && setHoverAt(idx + 0.5);
	const handleMouseOut = () => canSetRating && setHoverAt(null);
	const handleClick = (idx: number) => canSetRating && setRating(idx + 0.5);

	const stars: ReactNode[] = [];

	if (canSetRating) {
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
	} else {
		for (let i = 0; i < 5; i += 0.5) {
			const selected = i < rating;

			stars.push(<Star className={cls.defaultCursor} key={i} selected={selected} indexVal={i} />);
		}
	}

	return (
		<div className={classNames(cls.rating, [className])} {...otherProps}>
			{stars}
		</div>
	);
};

export default Rating;
