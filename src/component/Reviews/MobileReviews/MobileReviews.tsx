"use client"

import React, { useState } from 'react';
import { ReviewItemProps, reviewData } from '../reviewsData';
import "./MobileReviews.scss"
import ReviewItem from '../ReviewItem';//Імпорт компоненту ReviewItem для відображення окремого відгуку
import VisiblePageService from '../services/VisiblePageService';
import PageButton from '../PageButton';

const MobileReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);// Стан для відстеження поточної сторінки

    const visibleItems: ReviewItemProps[] = VisiblePageService(reviewData, 2, currentPage)

    return (
        <div className="review-mobile-container">
            <h1>Відгуки наших покупців</h1>
            <div className="review-mobile-column">
                {visibleItems.map((props) => (
                <ReviewItem key={props.id} {...props} />
                ))}
                <PageButton currentPage={currentPage} setter={setCurrentPage} />
            </div>

        </div>
    );
}

export default MobileReviews;