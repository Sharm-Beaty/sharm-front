import React from 'react';
import { Product } from '../Main page/ProductCarousel/types/types';
import { ArrowLeft, ArrowRight } from '../svg';
import cls from './Controls.module.scss';
type Props = {
	sliderData: Product[];
	data: Product[];
	transitionData: Product;
	handleData: React.Dispatch<React.SetStateAction<Product[]>>;
	handleTransitionData: React.Dispatch<React.SetStateAction<Product>>;
	initData: Product;
};

function Controls({ data, transitionData, handleData, handleTransitionData, initData }: Props) {
	const handlePrev = () => {
		handleData((prevData) => [
			transitionData ? transitionData : initData,
			...prevData.slice(0, prevData.length - 1),
		]);

		handleTransitionData(data[data.length - 1]);
	};

	const handleNext = () => {
		handleData((prev) => prev.slice(1));
		handleTransitionData(data[0]);
		setTimeout(() => {
			handleData((newData) => [...newData, transitionData ? transitionData : initData]);
		}, 500);
	};

	return (
		<div className={cls.navWrap}>
			<div className={cls.buttonPrev}>
				<ArrowLeft width={27} height={20} onClick={handlePrev} cursor='pointer' />
			</div>
			<div className={cls.buttonNext}>
				<ArrowRight width={27} height={20} onClick={handleNext} cursor='pointer' />
			</div>
		</div>
	);
}

export default Controls;
