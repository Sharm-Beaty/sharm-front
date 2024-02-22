import { FC, SVGProps } from 'react';
import { classNames } from '@/helpers';

interface SortArrowProps extends SVGProps<SVGSVGElement> {
	className?: string;
	strokeWidth?: number;
	strokeLinecap?: 'round';
	strokeLinejoin?: 'round';
}

const SortArrow: FC<SortArrowProps> = (props) => {
	const {
		className,
		strokeWidth = 2,
		strokeLinecap = 'round',
		strokeLinejoin = 'round',
		...otherProps
	} = props;

	return (
		<svg
			className={classNames('', [className])}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			stroke='currentColor'
			strokeWidth={strokeWidth}
			strokeLinecap={strokeLinecap}
			strokeLinejoin={strokeLinejoin}
			{...otherProps}
		>
			<path
				d='M10 4.41663V17.75M10 17.75L14.5834 12.75M10 17.75L5.41669 12.75'
				fill='currentColor'
				// stroke='currentColor'
				// stroke-width='2'
				// stroke-linecap='round'
				// stroke-linejoin='round'
			/>
		</svg>
	);
};

export { SortArrow };
