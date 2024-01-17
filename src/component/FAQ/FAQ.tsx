'use client';
import { FC, HTMLProps, useEffect, useRef } from 'react';
import { classNames } from '@/helpers';
import cls from './FAQ.module.scss';
import { FAQCard } from './FAQCard/FAQCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FaqProps extends HTMLProps<HTMLDivElement> {
	className?: string;
}

const faqSection: FAQData[] = [
	{
		question: 'Парфуми та косметика за доступними цінами',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.',
	},
	{
		question: 'Декоративна косметика та засоби для догляду',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.',
	},
	{
		question: 'Чому обирають саме нас?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.',
	},
	{
		question: 'Каталог парфумерії інтернет-магазину',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Euismod in hendrerit cursus enim metus. Quisque tempor quis in placerat sit ornare malesuada mattis eu. At eget at facilisis sed. Sit mauris dolor nam varius eget ut sodales felis. Neque sem rutrum rhoncus mattis vitae commodo volutpat semper. A mi arcu in eu quis nibh et vulputate pellentesque. Pretium ultrices praesent pulvinar sed blandit ullamcorper ornare viverra.',
	},
];

const Faq: FC<FaqProps> = ({ className, ...otherProps }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.fromTo(
			sectionRef.current,
			{
				autoAlpha: 0,
			},
			{
				id: 'faqSection',
				duration: 0.5,
				autoAlpha: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top center+=100',
					toggleActions: 'play none none reverse',
					// markers: true,
				},
			},
		);
	}, []);

	return (
		<section className={classNames(cls.faqSection, [className])} {...otherProps} ref={sectionRef}>
			<h5 className={cls.title}>Інтернет магазин косметики та парфумерії Sharm Beauty</h5>
			<ul className={cls.listOfAnsw}>
				<li className={cls.qAndAWrapper}>
					<FAQCard faqData={faqSection[0]} />
					<FAQCard faqData={faqSection[1]} />
				</li>
				<li className={cls.qAndAWrapper}>
					<FAQCard faqData={faqSection[2]} />
					<FAQCard faqData={faqSection[3]} />
				</li>
			</ul>
		</section>
	);
};

export default Faq;
