import { Carousel } from '@/component/Carousel';
import cls from './Main.module.scss';

interface MainProps {
	className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
	return (
		<div className={cls.main}>
			<Carousel />
		</div>
	);
};

export { Main };
