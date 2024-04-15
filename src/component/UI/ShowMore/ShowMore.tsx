'use client';
import { FC, memo } from 'react';
import { classNames } from '@/helpers';

import cls from './ShowMore.module.scss';
import { CircleArrow } from '@/component/svg';

interface ShowMoreProps {
	className?: string;
	onClick: () => void;
	hidden?: boolean;
}

const ShowMore: FC<ShowMoreProps> = memo(function ShowMore(props) {
	const { className, hidden, onClick, ...otherProps } = props;

	if (hidden) return <></>;

	return (
		<div className={classNames(cls.showMore, [className])} {...otherProps}>
			<button className={cls.button} onClick={onClick}>
				<CircleArrow className={cls.svg} />
			</button>
			<span>Показати ще 20 товарів</span>
		</div>
	);
});

export { ShowMore };
