'useClient';
import { FC, useEffect, useRef, useState } from 'react';
import cls from './FAQCard.module.scss';
import { classNames } from '@/helpers';
import { Arrow } from '@/component/svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FAQCardProps {
	className?: string;
	faqData: FAQData;
}

const FAQCard: FC<FAQCardProps> = (props) => {
	const {
		className,
		faqData: { question, answer },
		...otherProps
	} = props;

	const [open, setOpen] = useState<boolean>(false);
	const answerRef = useRef<HTMLParagraphElement>(null);
	const arrowRef = useRef<SVGSVGElement>(null);

	const toggleHeight = () => {
		const isOpen = open ? false : true;
		setOpen(isOpen);
	};

	useEffect(() => {
		gsap.to(arrowRef.current, {
			duration: 0.01,
			rotate: open ? '-180deg' : '0deg',
		});
		gsap.to(answerRef.current, {
			duration: 0.5,
			height: open ? 'auto' : '0px',
			opacity: open ? 1 : 0,
			onComplete: () => ScrollTrigger.refresh(),
		});
	}, [open]);

	return (
		<button
			className={classNames(cls.questionButton, [className])}
			{...otherProps}
			onClick={() => toggleHeight()}
		>
			<h6 className={cls.question}>
				{question}
				<Arrow className={cls.arrow} width='24px' height='24px' ref={arrowRef} />
			</h6>
			<p className={cls.answer} ref={answerRef}>
				<span style={{ display: 'block', paddingTop: '16px' }}>{answer}</span>
			</p>
		</button>
	);
};

export { FAQCard };
