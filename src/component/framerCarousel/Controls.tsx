import React from 'react';
import { Product } from '../Main page/ProductCarousel/types/types';
import { ArrowLeft, ArrowRight } from '../svg';
import cls from './Controls.module.scss';
type ControlsProps = {
	sliderData: Product[];
	data: Product[];
	handleData: React.Dispatch<React.SetStateAction<Product[]>>;
	currentIndex: number;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	slidesPerView: number;
};

function Controls({
	sliderData,
	handleData,
	currentIndex,
	setCurrentIndex,
	slidesPerView,
}: ControlsProps) {
	const handlePrev = () => {
		const index = (currentIndex - 1 + sliderData.length) % sliderData.length;
		setCurrentIndex((prev) => (prev = index));
		updateView(index);
	};

	const handleNext = () => {
		const index = (currentIndex + 1) % sliderData.length;
		setCurrentIndex((prev) => (prev + 1) % sliderData.length);
		updateView(index);
	};

	function updateView(index: number) {
		let endIndex = index + slidesPerView;

		if (endIndex > sliderData.length) {
			// If yes, wrap around to the beginning
			endIndex = endIndex - sliderData.length;
			// Display sliderData from currentIndex to the end and then from the beginning to fill up to slidesPerView
			handleData(() => [...sliderData.slice(index), ...sliderData.slice(0, endIndex)]);
		} else {
			// Display sliderData normally
			handleData(() => sliderData.slice(index, endIndex));
		}
	}

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
