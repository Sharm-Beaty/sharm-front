import { motion } from 'framer-motion';

interface likeProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	strokePathColor?: string;
	fillPath?: string;
}

const Like: React.FC<likeProps> = (props) => {
	const {
		className,
		strokePathColor = '#828282',
		fillPath = 'none',
		width = 22,
		height = 19,
		...otherProps
	} = props;

	const heartbeatVariants = {
		rest: {
			scale: 1,
		},
		beat: {
			scale: [1, 1.3, 1.1, 1.2],
			transition: {
				duration: 1,
				times: [0, 0.3, 0.6, 1],
				ease: 'easeIn',
				repeat: Infinity,
			},
		},
	};

	return (
		<motion.svg
			className={className}
			whileHover={'beat'}
			initial={'rest'}
			variants={heartbeatVariants}
			width={width}
			height={height}
			viewBox='0 0 22 19'
			fill='none'
			cursor='pointer'
			xmlns='http://www.w3.org/2000/svg'
			{...otherProps}
		>
			<path
				d='M19.4578 2.54219C18.9691 2.05327 18.3889 1.66542 17.7503 1.40081C17.1117 1.1362 16.4272 1 15.7359 1C15.0446 1 14.3601 1.1362 13.7215 1.40081C13.0829 1.66542 12.5026 2.05327 12.0139 2.54219L10.9997 3.55639L9.98554 2.54219C8.99842 1.55507 7.6596 1.00051 6.26361 1.00051C4.86761 1.00051 3.52879 1.55507 2.54168 2.54219C1.55456 3.52931 1 4.86813 1 6.26412C1 7.66012 1.55456 8.99894 2.54168 9.98606L3.55588 11.0003L10.9997 18.4441L18.4436 11.0003L19.4578 9.98606C19.9467 9.49737 20.3346 8.91714 20.5992 8.27852C20.8638 7.6399 21 6.9554 21 6.26412C21 5.57285 20.8638 4.88835 20.5992 4.24973C20.3346 3.61111 19.9467 3.03088 19.4578 2.54219Z'
				stroke={fillPath === 'none' ? strokePathColor : 'red'}
				fill={fillPath}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</motion.svg>
	);
};

export { Like };
