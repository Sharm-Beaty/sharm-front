'use client'
import React, { useState } from 'react';
import { reviewData, ReviewItemProps } from '../reviewsData'; // Assuming you have a type for ReviewItemProps
import "./DesktopReviews.scss";
import ReviewItem from '../ReviewItem';
import VisiblePageService from '../services/VisiblePageService';
import PageButton from '../PageButton';

const DesktopReviews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const visibleItems: ReviewItemProps[] = VisiblePageService(reviewData, 3, currentPage);

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

export default DesktopReviews;
