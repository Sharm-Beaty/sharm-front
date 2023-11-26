import { ArrowLeft, ArrowRight } from '../svg';
import cls from './Controls.module.scss';

interface ControlsProps {
	handlePrev: () => void;
	handleNext: () => void;
}

const Controls: React.FC<ControlsProps> = ({ handlePrev, handleNext }) => {
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
};

export default Controls;
