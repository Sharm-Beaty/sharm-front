import Image from 'next/image';
import cls from './Slide.module.scss';
import { SlideData } from '../carouselData';
import Link from 'next/link';

interface SlideProps {
	className?: string;
	slide: SlideData;
}

const Slide = ({ className, slide }: SlideProps) => {
	return (
		<>
			<Image src={slide.img} alt='Slide Sample' fill className={cls.img} />
			<div className={cls.slideInfo}>
				<div className={cls.textBox}>
					<h2 className={cls.title}>{slide.title}</h2>
					<h3 className={cls.subTitle}>{slide.subTitle}</h3>
				</div>

				<div className={cls.linkBox}>
					<Link href='/' className={cls.btn}>
						{slide.btnText}
					</Link>
				</div>
			</div>
		</>
	);
};

export { Slide };