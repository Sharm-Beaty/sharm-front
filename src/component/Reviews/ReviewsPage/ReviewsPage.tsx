'use client'
import React, { useState } from 'react';
import { reviewData, ReviewItemProps } from '../reviewsData';
import "./ReviewsPage.scss";
import ReviewItem from '../ReviewItem/ReviewItem';
import VisiblePageService from '../services/VisiblePageService';
import PageButton from '../PageButton/PageButton';

const DesktopReviews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const visibleItems: ReviewItemProps[] = VisiblePageService(reviewData, 3, currentPage);

    return (
        <div className="review-container">
            <h1>Відгуки наших покупців</h1>
            <div className="review-column">
                {visibleItems.map((props) => (
                    <ReviewItem key={props.id} {...props} />
                ))}
                <PageButton currentPage={currentPage} setter={setCurrentPage} />
            </div>
        </div>
    );
}

export default DesktopReviews;
