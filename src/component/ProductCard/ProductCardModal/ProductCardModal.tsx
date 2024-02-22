'use client';
import { Dispatch, FC, SetStateAction, memo, useState } from 'react';
import { classNames } from '@/helpers';

import './ProductCardModal.scss';
import Image from 'next/image';

interface ProductCardModalProps {
	className?: string;
	productId?: string;
	variantId: string;
	variantsData: NonNullable<DiscountedProducts['variantsData']>;
	setCurrentPrice?: Dispatch<
		SetStateAction<{
			current: string | null;
			old: string | null;
		}>
	>;
}

const ProductCardModal: FC<ProductCardModalProps> = memo(function ProductModal(props) {
	const {
		className,
		productId,
		variantsData,
		setCurrentPrice = () => {},
		variantId,
		...otherProps
	} = props;

	const variants = Object.entries(variantsData);
	const [currentVariant, setCurrentVariant] = useState(variantsData[variantId]);
	const [checked, setChecked] = useState(variantId);
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = (event: any) => {
		const target = event.target as HTMLDivElement;
		const variant = target.dataset.variantId || null;
		const price = {
			current: target.dataset.price || null,
			old: target.dataset.priceOld || null,
		};

		if (variant) {
			setCurrentVariant(variantsData[variant]);
			setChecked(variant);
		}

		if (price.current) {
			setCurrentPrice(price);
		}

		setIsOpen(false);
	};

	return (
		<div className={classNames('simple-slider-list__other-info', [className])} {...otherProps}>
			<div className='product-item__volume-item product-item__volume-select'>
				<div className='select'>
					<input
						type='checkbox'
						checked={isOpen}
						onChange={() => setIsOpen((prev) => !prev)}
						id={`variants_${productId}`}
					/>
					<label htmlFor={`variants_${productId}`}>
						<span>
							<Image
								width={22}
								height={22}
								className='variant__image'
								src='/product-carousel/variant_pic/test.jpg'
								alt=''
							/>
							{currentVariant.shipping && (
								<i className={currentVariant.shipping} title='Доставка з ЄС, 5-8 роб. днів'></i>
							)}
							&nbsp;{currentVariant.value}
						</span>
					</label>
					<div className='variants scrolling'>
						{variants.map(([key, variant]) => {
							const checkedClass = key === checked ? ' checked' : '';
							return (
								<div
									key={key + productId}
									className={'variant' + checkedClass}
									title={variant.value}
									data-variant-id={key}
									data-price={variant.price}
									data-price-old={variant.priceOld || 0}
									data-favourite='false'
									data-img='/product-carousel/variant_pic/test.jpg'
									onClick={onClickHandler}>
									<Image
										width={22}
										height={22}
										className='variant__image'
										src='/product-carousel/variant_pic/test.jpg'
										alt=''
									/>
									{variant.shipping && (
										<i className={variant.shipping} title='Доставка з ЄС, 5-8 роб. днів'></i>
									)}
									{variant.value}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='simple-slider-list-buttons'>
				<div className='button buy'>До кошика</div>
			</div>
		</div>
	);
});

export { ProductCardModal };
