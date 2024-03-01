import { classNames } from '@/helpers';

interface arrowLeftProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	pathClassName?: string;
}

const ArrowLeft: React.FC<arrowLeftProps> = (props) => {
	const { className, pathClassName, ...otherProps } = props;
	return (
		<svg
			viewBox='0 0 27 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames('', [className])}
			{...otherProps}
		>
			<path
				className={classNames('', [pathClassName])}
				d='M0.292892 9.29289C-0.0976315 9.68342 -0.0976315 10.3166 0.292892 10.7071L6.65685 17.0711C7.04738 17.4616 7.68054 17.4616 8.07107 17.0711C8.46159 16.6805 8.46159 16.0474 8.07107 15.6569L2.41421 10L8.07107 4.34315C8.46159 3.95262 8.46159 3.31946 8.07107 2.92893C7.68054 2.53841 7.04738 2.53841 6.65685 2.92893L0.292892 9.29289ZM26 9L1 9V11L26 11V9Z'
				fill='currentColor'
			/>
		</svg>
	);
};

export { ArrowLeft };
