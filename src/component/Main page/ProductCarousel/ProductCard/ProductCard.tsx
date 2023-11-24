'use client';
import cls from './ProductCard.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../types/types';
// import Image from 'next/image';
import { Like } from '../../../UI/Like/Like';
import { useState } from 'react';
import Rating from '@/component/Rating/Rating';
import Link from 'next/link';

interface ProductCardProps {
	className?: string;
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { className, product } = props;
	const [isInFavorite, setIsInFavorite] = useState(product.inFavorites);
	const IsDiscounted = Boolean(product.discountedPrice);
	return (
		<article className={classNames(cls.productCard, [className])}>
			<div className={cls.head}>
				<Like
					className={cls.svgLike}
					onClick={() => setIsInFavorite((prev) => !prev)}
					fillPath={isInFavorite ? 'red' : 'none'}
				/>
				<Link href='#'>
					<img src={product.img} alt={product.img_alt ?? ''} />
				</Link>
			</div>
			<div className={cls.body}>
				<Link href='#'>
					<h2 className={cls.title}>{product.title}</h2>
					<p className={cls.subTitle}>{product.subTitle}</p>
				</Link>
			</div>
			<div className={cls.footer}>
				<div className={cls.ratingWrapper}>
					<Rating className={cls.rating} ratingNumber={product.rating} />
					<Link href='#' className={cls.amountComments}>
						({product.amountComments})
					</Link>
				</div>
				<div className={cls.price}>
					{product.discountedPrice && <span>{product.discountedPrice}</span>}
					<span className={classNames('', [], { [cls.oldPrice]: IsDiscounted })}>
						{product.price}
					</span>
				</div>
			</div>
		</article>
	);
};

export { ProductCard };
