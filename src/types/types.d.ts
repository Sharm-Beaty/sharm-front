type DiscountedProducts = {
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
	readonly additionalSchemaData: SchemaProductInfo;
};

type CardsCarouselBreakpoints = {
	[key: string]: {
		slidesPerView: number;
		spaceBetween: number;
	};
};
