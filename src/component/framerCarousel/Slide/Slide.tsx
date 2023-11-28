import React, { ComponentType, PropsWithChildren, RefAttributes, forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cls from './Slide.module.scss';
import { classNames } from '@/helpers';
import Rating from '@/component/Rating/Rating';
import Link from 'next/link';
import { Product } from '@/component/Main page/ProductCarousel/types/types';
import { Like } from '@/component/UI/Like';

interface SlideProps extends HTMLMotionProps<'article'> {
	className?: string;
	product: Product;
}
const Slide: ComponentType<PropsWithChildren<SlideProps & RefAttributes<HTMLElement>>> = forwardRef(
	function Slide(props, ref) {
		const { className, product, ...otherProps } = props;
		const [isInFavorite, setIsInFavorite] = React.useState<boolean>(product.inFavorites);
		const IsDiscounted = Boolean(product.discountedPrice);

		return (
			<motion.article
				ref={ref}
				className={classNames(cls.slide, [className])}
				layout
				whileInView='visible'
				viewport={{ once: true }}
				initial={{ x: 0, scale: 0.8, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.4,
					},
				}}
				transition={{
					type: 'keyframes',
					damping: 15,
					stiffness: 100,
				}}
				exit={{ scale: 1, opacity: 0 }}
				{...otherProps}
			>
				<motion.div layout className={cls.head}>
					<Like
						className={cls.svgLike}
						onClick={() => setIsInFavorite((prev) => !prev)}
						fillPath={isInFavorite ? 'red' : 'none'}
					/>
					<Link href='#'>
						<motion.img layoutId={product.img} src={product.img} alt={product.img_alt ?? ''} />
					</Link>
				</motion.div>
				<motion.div layout className={cls.body}>
					<Link href='#'>
						<motion.h2 layoutId={product.title} className={cls.title}>
							{product.title}
						</motion.h2>
						<motion.p layoutId={product.subTitle} className={cls.subTitle}>
							{product.subTitle}
						</motion.p>
					</Link>
				</motion.div>
				<motion.div className={cls.footer}>
					<motion.div layoutId={`${product.rating}`} className={cls.ratingWrapper}>
						<Rating className={cls.rating} ratingNumber={product.rating} />
						<Link href='#' className={cls.amountComments}>
							({product.amountComments})
						</Link>
					</motion.div>
					<motion.div layoutId={product.price} className={cls.price}>
						{product.discountedPrice && <motion.span>{product.discountedPrice}</motion.span>}
						<motion.span className={classNames('', [], { [cls.oldPrice]: IsDiscounted })}>
							{product.price}
						</motion.span>
					</motion.div>
				</motion.div>
			</motion.article>
		);
	},
);

const MSlide = motion(Slide);

export { Slide, MSlide };
