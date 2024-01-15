'use client'
import {useState, useEffect, Dispatch, SetStateAction} from 'react';

/**
 * Custom React hook for managing the favorite state of a product in local storage.
 * @param {string} productId - The unique identifier of the product.
 * @returns {UseFavoriteProductReturnType} An array containing the current favorite state and a function to toggle the state.
 */
type UseFavoriteProductReturnType = [boolean, Dispatch<SetStateAction<boolean>>];

/**
 * @function useFavoriteProduct
 * @param {string} productId - The unique identifier of the product.
 * @returns {UseFavoriteProductReturnType} An array containing the current favorite state and a function to toggle the state.
 */
const useFavoriteProduct = (productId: string): UseFavoriteProductReturnType => {
    // Initialize state with the value from local storage or default to false
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const storageKey = `favorite_${productId}`;

    useEffect(() => {
        try {
            const storedFavorite = window.localStorage.getItem(storageKey);
            setIsFavorite(() => (storedFavorite ? JSON.parse(storedFavorite) : false));
        } catch (error) {
            console.log(error);
        }
    }, []);

    // Update local storage when isFavorite changes
    useEffect(() => {
        try {
            if (isFavorite) {
                window.localStorage.setItem(storageKey, JSON.stringify(isFavorite));
            } else {
                window.localStorage.removeItem(storageKey);
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFavorite, storageKey]);

    return [isFavorite, setIsFavorite];
};

export {useFavoriteProduct};

