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
	imgSize?: {
		width: number;
		height: number;
	};
}
const ProductCard: ComponentType<PropsWithChildren<ProductCardProps & RefAttributes<HTMLElement>>> =
	forwardRef(function ProductCard(
		{ className, product, imgSize = { width: 200, height: 270 }, ...otherProps },
		ref,
	) {
		const [isInFavorite, setIsInFavorite] = useFavoriteProduct(product.id);
		const IsDiscounted = Boolean(product.priceOld);
		const [price, setCurrentPrice] = useState({
			current: product.price,
			old: product.priceOld,
		});
		return (
			<motion.article
				ref={ref}
				className={classNames(cls.productCard, [className])}
				{...otherProps}>
				<motion.div className={cls.head}>
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
							width={imgSize.width}
							height={imgSize.height}
							draggable='false'
						/>
					</Link>
				</motion.div>
				<motion.div className={cls.body}>
					<Link href={product.id}>
						<motion.h5 className={cls.title}>{product.name}</motion.h5>
						<motion.p className={cls.subTitle}>{product.description}</motion.p>
					</Link>
				</motion.div>
				<motion.div className={cls.footer}>
					<motion.div className={cls.ratingWrapper}>
						<Rating className={cls.rating} ratingNumber={product.rating ?? -1} />
						<Link href={product.id} className={cls.amountComments}>
							(1)
						</Link>
					</motion.div>
					<motion.div className={cls.price}>
						{price.current && (
							<>
								<motion.span className={cls.currentPrise}>
									{getFormattedPrice(price.current || 0)}
								</motion.span>
							</>
						)}
						{Number(price.old) > 0 && (
							<motion.span className={price.old ? cls.oldPrice : ''}>
								{getFormattedPrice(price.old || 0)}
							</motion.span>
						)}
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
