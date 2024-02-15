'use client';
import { FC, HTMLProps, useEffect, useRef } from 'react';
import { classNames } from '@/helpers';
import cls from './FAQ.module.scss';
import { FAQCard } from './FAQCard/FAQCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
		gsap.registerPlugin(ScrollTrigger);
		let ctx = gsap.context(() => {
			let tl = gsap.timeline({
				autoAlpha: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top center+=200',
					end: 'bottom+=150 center-=100',
					toggleActions: 'play reverse play reverse',
					// markers: true,
				},
			});

			tl.to(sectionRef.current, {
				id: 'faqSection',
				duration: 0.3,
				autoAlpha: 1,
				ease: 'none',
			}).to(`.${cls.qAndAWrapper} button`, {
				x: 0,
				stagger: 0.2,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			className={classNames(cls.faqSection, [className])}
			{...otherProps}
			ref={sectionRef}
			style={{ opacity: 0, visibility: 'hidden' }}
		>
			<h5 className={cls.title}>Інтернет магазин косметики та парфумерії Sharm Beauty</h5>
			<ul className={cls.listOfAnsw}>
				<li className={cls.qAndAWrapper}>
					<FAQCard faqData={faqSection[0]} style={{ transform: 'translate(-1000px, 0px)' }} />
					<FAQCard faqData={faqSection[1]} style={{ transform: 'translate(-1000px, 0px)' }} />
				</li>
				<li className={cls.qAndAWrapper}>
					<FAQCard faqData={faqSection[2]} style={{ transform: 'translate(1000px, 0px)' }} />
					<FAQCard faqData={faqSection[3]} style={{ transform: 'translate(1000px, 0px)' }} />
				</li>
			</ul>
		</section>
	);
};

export default Faq;
