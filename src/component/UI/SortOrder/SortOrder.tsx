'use client';
import { FC, useState } from 'react';
import { classNames } from '@/helpers';

import cls from './SortOrder.module.scss';
import { SortArrow } from '@/component/svg';

interface SortOrderProps {
	className?: string;
	isSortDSC: boolean;
	productQuantity: number | string;
	currentItemIndex: number;
	quantityByPage: number;
	onClickHandler: () => void;
}

const SortOrder: FC<SortOrderProps> = (props) => {
	const {
		className,
		isSortDSC,
		productQuantity,
		currentItemIndex,
		quantityByPage,
		onClickHandler,
		...otherProps
	} = props;

	const onClick = () => {
		onClickHandler();
	};

	return (
		<div className={classNames(cls.sortOrder, [className])} {...otherProps}>
			<span>
				Позиції {currentItemIndex}-{quantityByPage} з {productQuantity}
			</span>
			<button className={cls.button} onClick={onClick}>
				<SortArrow
					className={classNames(cls.arrow, [], { [cls.arrowUp]: isSortDSC })}
					width={20}
					height={20}
				/>
			</button>
		</div>
	);
};

export { SortOrder };
