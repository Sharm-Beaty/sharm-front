import React, { ComponentType, PropsWithChildren, RefAttributes, forwardRef } from 'react';
import Image from 'next/image';
import { HTMLMotionProps, motion } from 'framer-motion';
import cls from './index.module.scss';
import { classNames } from '@/helpers';
import Rating from '@/component/Rating';
import Link from 'next/link';
import { Like } from '@/component/UI/Like';

interface ProductCardProps extends HTMLMotionProps<'article'> {
	className?: string;
	product: DiscountedProducts;
}
const ProductCard: ComponentType<PropsWithChildren<ProductCardProps & RefAttributes<HTMLElement>>> =
	forwardRef(function ProductCard({ className, product, ...otherProps }, ref) {
		const [isInFavorite, setIsInFavorite] = React.useState<boolean>(product.inFavorites);
		const IsDiscounted = Boolean(product.discountedPrice);
		const discount = IsDiscounted
			? Math.ceil((1 - product.discountedPrice! / product.price) * 100)
			: null;

		return (
			<motion.article
				ref={ref}
				className={classNames(cls.productCard, [className])}
				layout
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
						width={25}
						height={25}
						fillPath={isInFavorite ? 'red' : 'none'}
					/>
					<Link href={product.url}>
						<Image src={product.img} alt={product.img_alt ?? ''} width={200} height={270} />
					</Link>
				</motion.div>
				<motion.div layout className={cls.body}>
					<Link href={product.url}>
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
						<Link href={product.url} className={cls.amountComments}>
							({product.amountComments})
						</Link>
					</motion.div>
					<motion.div className={cls.price}>
						{product.discountedPrice && (
							<>
								<motion.span className={cls.currentPrise}>
									{product.currency}
									{product.discountedPrice}
								</motion.span>
								{!!discount && <span className={cls.discount}>{discount}% OFF</span>}
							</>
						)}
						<motion.span className={classNames('', [], { [cls.oldPrice]: IsDiscounted })}>
							{product.currency}
							{product.price}
						</motion.span>
					</motion.div>
				</motion.div>
			</motion.article>
		);
	});

const MProductCard = motion(ProductCard);

export { ProductCard, MProductCard };
