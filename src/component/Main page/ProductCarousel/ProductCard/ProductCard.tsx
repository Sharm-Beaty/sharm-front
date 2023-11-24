'use client';
import cls from './ProductCard.module.scss';
import { classNames } from '@/helpers';
import { Product } from '../types/types';
// import Image from 'next/image';
import { Like } from '../../../UI/Like/Like';
import { useState } from 'react';
import Rating from '@/component/Rating/Rating';

interface ProductCardProps {
	className?: string;
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { className, product } = props;
	const [isInFavorite, setIsInFavorite] = useState(product.inFavorites);

	return (
		<article className={classNames(cls.productCard, [className])}>
			<div className={cls.head}>
				<Like
					className={cls.svgLike}
					onClick={() => setIsInFavorite((prev) => !prev)}
					fillPath={isInFavorite ? 'red' : 'none'}
				/>
				<img src={product.img} alt={product.img_alt ?? ''} />
			</div>
			<div className={cls.body}>
				<h2 className={cls.title}>{product.title}</h2>
				<p className={cls.subTitle}>{product.subTitle}</p>
			</div>
			<div className={cls.footer}>
				<div className={cls.rating}>
					<Rating />
					<a href='#'>({product.amountComments})</a>
				</div>
				<div className={cls.price}>
					<span>{product.price}</span>
					{product.discountedPrice && <span>{product.discountedPrice}</span>}
				</div>
			</div>
		</article>
	);
};

export { ProductCard };
