'use client';
import cls from './index.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../types/types';
// import Image from 'next/image';
import { Like } from '../../../UI/Like/Like';
import { useState } from 'react';
import Rating from '@/component/Rating/Rating';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

interface ProductCardProps {
	className?: string;
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { className, product } = props;
	const [isInFavorite, setIsInFavorite] = useState(product.inFavorites);
	const IsDiscounted = Boolean(product.discountedPrice);
	const discount = IsDiscounted
		? Math.ceil((1 - product.discountedPrice! / product.price) * 100)
		: null;
	return (
		<article className={classNames(cls.productCard, [className])}>
			<div className={cls.head}>
				<AnimatePresence mode='wait'>
					<Like
						className={cls.svgLike}
						onClick={() => setIsInFavorite((prev) => !prev)}
						width={25}
						height={25}
						fillPath={isInFavorite ? 'red' : 'none'}
					/>
				</AnimatePresence>
				<Link href={product.url}>
					<img src={product.img} alt={product.img_alt ?? ''} />
				</Link>
			</div>
			<div className={cls.body}>
				<Link href={product.url}>
					<h2 className={cls.title}>{product.title}</h2>
					<p className={cls.subTitle}>{product.subTitle}</p>
				</Link>
			</div>
			<div className={cls.footer}>
				<div className={cls.ratingWrapper}>
					<Rating className={cls.rating} ratingNumber={product.rating} />
					<Link href={product.url} className={cls.amountComments}>
						({product.amountComments})
					</Link>
				</div>
				<div className={cls.price}>
					{product.discountedPrice && (
						<>
							<span className={cls.currentPrise}>
								{product.currency}
								{product.discountedPrice}
							</span>
							{!!discount && <span className={cls.discount}>{discount}% OFF</span>}
						</>
					)}

					<span className={classNames('', [], { [cls.oldPrice]: IsDiscounted })}>
						{product.currency}
						{product.price}
					</span>
				</div>
			</div>
		</article>
	);
};

export { ProductCard };
