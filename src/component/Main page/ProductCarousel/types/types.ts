export type Product = {
	readonly id: number;
	readonly title: string;
	readonly subTitle: string;
	readonly rating: number;
	readonly inFavorites: boolean;
	readonly amountComments: number;
	readonly price: string;
	readonly discountedPrice?: string;
	readonly img: string;
	readonly img_alt?: string;
};
