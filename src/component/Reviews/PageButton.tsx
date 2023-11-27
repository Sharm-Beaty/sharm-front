import React from 'react';    
import { reviewData } from './reviewsData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PageButton = ({currentPage, setter}) => {
    const itemPerPage = 3;// Інтерфейс для пропсів компоненту DesktopReviews
    const totalPages = Math.ceil(reviewData.length / itemPerPage); // Розрахунок загальної кількості сторінок

    // Обробник зміни сторінки
    const handlePageChange = (newPage: number ) => {
        if (newPage !== 0 && newPage <= totalPages) {
            setter(newPage);
        }
    }

    return (
                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)}> <FaArrowLeft/> </button>
                    <button onClick={() => handlePageChange(currentPage + 1)}> <FaArrowRight /> </button>
                </div>
    )

}
export default PageButton