import { ComponentType, PropsWithChildren, RefAttributes, SVGProps, forwardRef } from 'react';

interface ArrowSVG extends SVGProps<SVGSVGElement> {
	className?: string;
	width?: string;
	height?: string;
}

export const Arrow: ComponentType<PropsWithChildren<ArrowSVG & RefAttributes<SVGSVGElement>>> =
	forwardRef(function Arrow(
		{ className = 'arrow-svg', width = '7', height = '4', ...otherProps },
		ref,
	) {
		return (
			<svg
				className={`${className} arrow-svg`}
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				viewBox='0 0 7 4'
				fill='none'
				ref={ref}
				{...otherProps}
			>
				<path
					d='M0.5 0.5L3.5 3.5L6.5 0.5'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		);
	});
