import { FC, SVGProps } from 'react';
import { classNames } from '@/helpers';

interface CircleArrowProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

const CircleArrow: FC<CircleArrowProps> = (props) => {
	const {
		className,
		stroke = 'currentColor',
		strokeWidth = 5,
		strokeLinecap = 'round',
		strokeLinejoin = 'round',
		...otherProps
	} = props;

	return (
		<svg
			className={classNames('', [className])}
			viewBox='0 0 49 52'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...otherProps}>
			<path
				d='M41.4706 14.4673L39.585 12.5817C31.2538 4.25047 17.7463 4.25047 9.41514 12.5817C1.08395 20.9128 1.08395 34.4204 9.41514 42.7515C17.7463 51.0827 31.2538 51.0827 39.585 42.7515C44.4299 37.9067 46.4573 31.3113 45.6673 25.0013M41.4706 14.4673H30.1569M41.4706 14.4673V3.15356'
				stroke={stroke}
				strokeWidth={strokeWidth}
				strokeLinecap={strokeLinecap}
				strokeLinejoin={strokeLinejoin}
			/>
		</svg>
	);
};

export { CircleArrow };
