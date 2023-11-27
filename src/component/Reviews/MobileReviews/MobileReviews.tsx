"use client"

import React, { useState } from 'react';
import { reviewData } from '../reviewsData';
import "./MobileReviews.scss"
import ReviewItem from '../ReviewItem';//Імпорт компоненту ReviewItem для відображення окремого відгуку
import VisiblePageService from '../services/VisiblePageService';
import PageButton from '../PageButton';

const MobileReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);// Стан для відстеження поточної сторінки

    const visibleItems = VisiblePageService(reviewData, useState, 2, currentPage)

    return (
        <div className="review-desktop-container">
            <h1>Відгуки наших покупців</h1>
            <div className="review-desktop-column">
                {visibleItems.map((props) => (
                <ReviewItem key={props.id} {...props} />
                ))}
                <PageButton currentPage={currentPage} setter={setCurrentPage} />
            </div>

        </div>
    );
}

export default MobileReviews;