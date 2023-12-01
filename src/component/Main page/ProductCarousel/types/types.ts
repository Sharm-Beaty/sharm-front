export type Product = {
	readonly id: number;
	readonly title: string;
	readonly subTitle: string;
	readonly rating: number;
	readonly inFavorites: boolean;
	readonly amountComments: number;
	readonly url: string;
	readonly currency: string;
	readonly price: number;
	readonly discountedPrice?: number;
	readonly img: string;
	readonly img_alt?: string;
};
