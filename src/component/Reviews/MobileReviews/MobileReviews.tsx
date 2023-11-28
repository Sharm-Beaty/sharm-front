"use client"

import React, { useState } from 'react';
import { ReviewItemProps, reviewData } from '../reviewsData';
import "./MobileReviews.scss"
import VisiblePageService from '../services/VisiblePageService';
import PageButton from '../PageButton';
import { FaStar } from 'react-icons/fa';
import { ActiveLink } from '@/component/UI/ActiveLink/ActivLink';
import Link from 'next/link';

const MobileReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);// Стан для відстеження поточної сторінки

    const visibleItems: ReviewItemProps[] = VisiblePageService(reviewData, 2, currentPage)

    return (
        <div className="review-mobile-container">
            <h1>Відгуки наших покупців</h1>
            <div className="review-mobile-column">
                {visibleItems.map(({ id, name, date, review, img, product, type, rating }) => (
                    <ul key={id}>
                            <li className='item-name text-bold'>{name} {date}
                            </li>
                            <li>
                                <div className="item-rating">
                                    {rating !== undefined && Array.from({ length: 5 }, (_, index) => (
                                        <FaStar key={index} color={index < rating ? 'gold' : 'gray'} />
                                    ))}
                            </div>
                            </li>
                            <div className='cot'>
                            <li className='image-link'>
                                <ActiveLink rout={'./'}><img src={img} alt='img' /></ActiveLink>
                                <Link href="/" className='product-type'>
                                    <span className='product'>{product}</span>
                                </Link>
                            </li>
                        </div>
                            <li className='item-review'>{review}</li>

                        </ul>
                ))}
                <PageButton currentPage={currentPage} setter={setCurrentPage} />
            </div>

        </div>
    );
}

export default MobileReviews;