import React, { FC } from 'react';
import { ActiveLink } from '@/component/UI/ActiveLink/ActivLink';
import Link from 'next/link';
import Stars from './Stars';

// Інтерфейс для пропсів компоненту ReviewItem
interface ReviewItemProps {
    id?: number;
    name?: string;
    date?: string;
    review?: string;
    img?: string;
    product?: string;
    type?: string;
    rating?: number;
}


const ReviewItem: FC<ReviewItemProps> = ({ id, name, date, review, img, product, type, rating }) => {

    return (
    <>
        <ul className='review-ul' key={id}>
            <li className='item-name text-bold'>{name} {date}
                <div className="item-rating">
                    {rating !== undefined && Array.from({ length: 5 }, (_, index) => (
                        <Stars key={index} filled={index < rating}/>
                    ))}
                </div>
            </li>
            <li className='item-review'>{review}</li>
            <li className='image-link'>
                <ActiveLink rout={'./'}><img src={img} alt='img' /></ActiveLink>
                <Link href="/" className='product-type'>
                    <span className='product text-bold'>{product}</span>
                    <span className='type'>{type}</span>
                </Link>
            </li>
        </ul>
        </>
    );
};

export default ReviewItem;