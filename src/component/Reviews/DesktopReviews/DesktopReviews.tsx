"use client"

import React, { useState } from 'react';
import { reviewData } from '../reviewsData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "./DesktopReviews.scss"
import ReviewItem from '../ReviewItem';//Імпорт компоненту ReviewItem для відображення окремого відгуку

const itemPerPage = 3;// Інтерфейс для пропсів компоненту DesktopReviews

const DesktopReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);// Стан для відстеження поточної сторінки

    const startIndex = (currentPage - 1) * itemPerPage; // Індекс початку видимих елементів на сторінці
    const endIndex = startIndex + itemPerPage; // Індекс кінця видимих елементів на сторінці

    const visibleItems = reviewData.slice(startIndex, endIndex); // Фільтрація видимих елементів на сторінці

    const totalPages = Math.ceil(reviewData.length / itemPerPage); // Розрахунок загальної кількості сторінок

    // Обробник зміни сторінки
    const handlePageChange = (newPage: number ) => {
        if (newPage !== 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    return (
        <div className="review-desktop-container">
            <h1>Відгуки наших покупців</h1>
            <div className="review-desktop-column">
                {visibleItems.map((props) => (
                <ReviewItem key={props.id} {...props} />
                ))}
                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)}> <FaArrowLeft/> </button>
                    <button onClick={() => handlePageChange(currentPage + 1)}> <FaArrowRight /> </button>
                </div>
            </div>

        </div>
    );
}

export default DesktopReviews;