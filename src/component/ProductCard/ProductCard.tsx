'use client';
import React, {
	ComponentType,
	PropsWithChildren,
	RefAttributes,
	useState,
	forwardRef,
} from 'react';
import Image from 'next/image';
import { HTMLMotionProps, motion } from 'framer-motion';
import cls from './index.module.scss';
import { classNames, getFormattedPrice } from '@/helpers';
import Rating from '@/component/Rating';
import Link from 'next/link';
import { Like } from '@/component/UI/Like';
import { useFavoriteProduct } from '@/hooks';
import { ProductCardModal } from './ProductCardModal/ProductCardModal';

interface ProductCardProps extends HTMLMotionProps<'article'> {
	className?: string;
	product: DiscountedProducts;
}
const ProductCard: ComponentType<PropsWithChildren<ProductCardProps & RefAttributes<HTMLElement>>> =
	forwardRef(function ProductCard({ className, product, ...otherProps }, ref) {
		const [isInFavorite, setIsInFavorite] = useFavoriteProduct(product.id);
		const IsDiscounted = Boolean(product.discountedPrice);
		const [price, setCurrentPrice] = useState({
			current: product.discountedPrice,
			old: product.price,
		});
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
					<Link href={product.id}>
						<Image
							src={product.images[0].url}
							alt={product.name}
							width={200}
							height={270}
							draggable='false'
						/>
					</Link>
				</motion.div>
				<motion.div layout className={cls.body}>
					<Link href={product.id}>
						<motion.h5 layoutId={product.name} className={cls.title}>
							{product.name}
						</motion.h5>
						<motion.p className={cls.subTitle}>{product.description}</motion.p>
					</Link>
				</motion.div>
				<motion.div className={cls.footer}>
					<motion.div layoutId={`${product.rating}`} className={cls.ratingWrapper}>
						<Rating className={cls.rating} ratingNumber={product.rating ?? -1} />
						<Link href={product.id} className={cls.amountComments}>
							(1)
						</Link>
					</motion.div>
					<motion.div className={cls.price}>
						{IsDiscounted && (
							<>
								<motion.span className={cls.currentPrise}>
									{getFormattedPrice(price.current || 0)}
								</motion.span>
							</>
						)}
						<motion.span className={IsDiscounted ? cls.oldPrice : ''}>
							{getFormattedPrice(price.old || 0)}
						</motion.span>
					</motion.div>
				</motion.div>
				{product.variantsData && (
					<ProductCardModal
						className={cls.modal}
						productId={product.id}
						variantId={product.variantId}
						variantsData={product.variantsData}
						setCurrentPrice={setCurrentPrice}
					/>
				)}
			</motion.article>
		);
	});

const MProductCard = motion(ProductCard);

export { ProductCard, MProductCard };
