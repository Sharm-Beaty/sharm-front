import { classNames } from '@/helpers';

interface arrowRightProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	pathClassName?: string;
}

const ArrowRight: React.FC<arrowRightProps> = (props) => {
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
				d='M26.7071 10.7071C27.0976 10.3166 27.0976 9.68342 26.7071 9.29289L20.3431 2.92893C19.9526 2.53841 19.3195 2.53841 18.9289 2.92893C18.5384 3.31946 18.5384 3.95262 18.9289 4.34315L24.5858 10L18.9289 15.6569C18.5384 16.0474 18.5384 16.6805 18.9289 17.0711C19.3195 17.4616 19.9526 17.4616 20.3431 17.0711L26.7071 10.7071ZM1 11H26V9H1V11Z'
				fill='currentColor'
			/>
		</svg>
	);
};

export { ArrowRight };
