'use client';
import { FC, useState } from 'react';
import { classNames } from '@/helpers';

import cls from './ProductList.module.scss';
import { MProductCard } from '../ProductCard';
import { Select } from '../Select/Select';
import { AnimatePresence } from 'framer-motion';
import { ShowMore } from '../UI/ShowMore';
import { SortOrder } from '../UI/SortOrder';

interface ProductListProps {
	className?: string;
	productList: DiscountedProducts[];
}

//ascending descending

const sortBy: SelectFormSortBy_UA = [
	'Популярністю',
	'Рейтингом',
	'Зростанням ціни',
	'Зменшенням ціни',
	'Наявністю',
];

type SortOrder = 'asc' | 'desc';

const ProductList: FC<ProductListProps> = (props) => {
	const { className, productList, ...otherProps } = props;
	const [isSortDSC, setIsSortDSC] = useState(false);
	const [quantityByPage, setQuantityByPage] = useState(20);
	const [productCards, setProductCards] = useState(productList.slice(0, quantityByPage));
	const [currentItemIndex, setCurrentItemIndex] = useState(1);

	function onClickHandler() {
		if (isSortDSC) {
			setProductCards(sortByFields({ arr: productCards, fields: [], orders: 'desc' }));
		} else {
			setProductCards(sortByFields({ arr: productCards, fields: [], orders: 'asc' }));
		}

		setIsSortDSC((prev) => !prev);
	}

	function showMore() {
		const nextItems = quantityByPage + 20;

		if (nextItems <= productList.length) {
			setProductCards([...productCards, ...productList.slice(quantityByPage, quantityByPage + 20)]);
			setQuantityByPage((prev) => (prev += 20));
			setCurrentItemIndex(20);
		}
	}

	return (
		<section className={classNames(cls.productsByCategory, [className])} {...otherProps}>
			<div className={cls.filter}>
				<SortOrder
					isSortDSC={isSortDSC}
					currentItemIndex={currentItemIndex}
					productQuantity={productList.length}
					quantityByPage={quantityByPage}
					onClickHandler={onClickHandler}
				/>
				<div className={cls.sortBy}>
					<span>Сортувати за</span>
					<Select variantsData={sortBy} uid='selectFormByCategory' />
				</div>
			</div>
			<AnimatePresence mode='popLayout' initial={false}>
				{productCards &&
					productCards.map((product) => {
						return (
							<MProductCard
								imgSize={{ width: 230, height: 320 }}
								className={cls.productCards}
								key={product.id}
								product={product}
								layout
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{
									opacity: 0,
									scale: 0.8,
								}}
								transition={{
									opacity: { duration: 1 },
									layout: {
										type: 'tween',
										bounce: false,
										duration: 1,
										ease: 'easeInOut',
									},
								}}
							/>
						);
					})}
			</AnimatePresence>
			<ShowMore onClick={showMore} hidden={quantityByPage >= productList.length} />
		</section>
	);
};

export default ProductList;

function sortByFields<T>({
	arr,
	orders = 'asc',
	fields,
}: {
	arr: T[];
	orders?: SortOrder | SortOrder[];
	fields: string[] | [];
}): T[] {
	const defaultOrder = Array.isArray(orders) ? 'asc' : orders;

	if (fields.length <= 0) {
		return arr.reverse();
	}

	const orderArray = Array.isArray(orders) ? orders : new Array(fields.length).fill(defaultOrder);

	return arr.sort((a: any, b: any) => {
		for (let i = 0; i < fields.length; i++) {
			const field = fields[i];
			const order = orderArray[i];

			if (a[field] < b[field]) {
				return order === 'asc' ? -1 : 1;
			}
			if (a[field] > b[field]) {
				return order === 'asc' ? 1 : -1;
			}
		}
		return 0;
	});
}
