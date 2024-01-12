import { useState, useEffect, Dispatch, SetStateAction } from 'react';

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
	const [isFavorite, setIsFavorite] = useState<boolean>(() => {
		const storedFavorite = localStorage.getItem(`favorite_${productId}`);
		return storedFavorite ? JSON.parse(storedFavorite) : false;
	});
	// Update local storage when isFavorite changes
	useEffect(() => {
		if (isFavorite) {
			localStorage.setItem(`favorite_${productId}`, JSON.stringify(isFavorite));
		} else {
			localStorage.removeItem(`favorite_${productId}`);
		}
	}, [productId, isFavorite]);

	return [isFavorite, setIsFavorite];
};

export { useFavoriteProduct };
