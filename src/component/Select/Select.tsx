'use client';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@/helpers';

import './Select.scss';

interface SelectProps {
	className?: string;
	uid: string;
	variantsData: string[];
	onClick?: () => void;
}

const Select: FC<SelectProps> = memo(function SelectSortBy(props) {
	const { className, uid, onClick = () => {}, variantsData, ...otherProps } = props;
	const ref = useRef<HTMLDivElement>(null);
	const [currentVariant, setCurrentVariant] = useState(variantsData[0]);
	const [checked, setChecked] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = (event: Event) => {
		const target = event.target as HTMLDivElement;
		const variant = Number(target?.dataset.variantId);

		onClick();

		if (variant || variant === 0) {
			setCurrentVariant(variantsData[variant]);
			setChecked(variant);
		}

		setIsOpen(false);
	};

	useEffect(() => {
		const checkIfClickedOutside = (event: Event) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', checkIfClickedOutside);
		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, [isOpen]);

	return (
		<div className={classNames('formSelect', [className])} {...otherProps}>
			<div className='select' ref={ref}>
				<input
					type='checkbox'
					checked={isOpen}
					onChange={() => setIsOpen((prev) => !prev)}
					id={`variants_${uid}`}
				/>
				<label htmlFor={`variants_${uid}`}>
					<span>{currentVariant}</span>
				</label>
				<div className='variants scrolling'>
					{variantsData.map((variant, i) => {
						if (currentVariant !== variant) {
							const checkedClass = i === checked ? ' checked' : '';
							return (
								<div
									key={variant}
									className={'variant' + checkedClass}
									title={variant}
									onClick={onClickHandler}
									data-variant-id={i}
									data-variant={variant}
								>
									{variant}
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
});

export { Select };
