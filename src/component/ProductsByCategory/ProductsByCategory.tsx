'use client';
import { FC, useState } from 'react';
import { classNames } from '@/helpers';

import cls from './ProductsByCategory.module.scss';
import { products } from '@/mock';
import { ProductCard } from '../ProductCard';
import { SortArrow } from '../svg';

interface ProductsByCategoryProps {
	className?: string;
}

//ascending descending

const ProductsByCategory: FC<ProductsByCategoryProps> = (props) => {
	const { className, ...otherProps } = props;
	const [isSortDSC, setIsSortDSC] = useState(false);
	return (
		<section className={classNames(cls.productsByCategory, [className])} {...otherProps}>
			<div className={cls.filter}>
				<div className={cls.sort}>
					<span>Позиції 1-20 з 241</span>
					<button className={cls.button} onClick={() => setIsSortDSC((prev) => !prev)}>
						<SortArrow
							className={classNames(cls.arrow, [], { [cls.arrowUp]: isSortDSC })}
							width={20}
							height={20}
						/>
					</button>
				</div>
				<div className={cls.sortBy}>
					<span>Сортувати за</span>
					<select>
						<option value='Популярністю'>Популярністю</option>
						<option value='Рейтингом'>Рейтингом</option>
						<option value='Зростанням ціни'>Зростанням ціни</option>
						<option value='Зменшенням ціни'>Зменшенням ціни</option>
						<option value='Наявністю'>Наявністю</option>
					</select>
				</div>
			</div>
			{products.map((product) => {
				return (
					<ProductCard
						imgSize={{ width: 230, height: 320 }}
						className={cls.productCards}
						key={product.id}
						product={product}
					/>
				);
			})}
		</section>
	);
};

export default ProductsByCategory;
