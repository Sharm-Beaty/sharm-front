// import React, { useState } from 'react';    

const VisiblePageService = (arr: any[], num: number, currpage: number) => {// Інтерфейс для пропсів компоненту DesktopReviews
    const startIndex = (currpage - 1) * num; // Індекс початку видимих елементів на сторінці
    const endIndex = startIndex + num; // Індекс кінця видимих елементів на сторінці

    const visibleItems = arr.slice(startIndex, endIndex);
    // Фільтрація видимих елементів на сторінці
    return visibleItems;
}
export default VisiblePageService