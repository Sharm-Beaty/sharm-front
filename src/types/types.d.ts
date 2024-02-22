type OptionsForFormattedPrice = {
	locales?: string;
	currency?: string;
	currencyDisplay?: 'narrowSymbol' | 'symbol' | 'name' | 'code';
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
};

type SelectFormSortBy_UA = [
	'Популярністю',
	'Рейтингом',
	'Зростанням ціни',
	'Зменшенням ціни',
	'Наявністю',
];

type ProductVariantsData = {
	price: string;
	priceOld: string;
	value: string;
	shipping?: 'eu';
};

type DiscountedProducts = {
	id: string;
	createdAt: string;
	updatedAt: string;
	images: Image[];
	isLuxury: boolean;
	siblings: Sibling[];
	variants: Record<string, string> | null;
	variantsData: Record<string, ProductVariantsData> | null;
	variant: string;
	variantId: string;
	brand?: string | null;
	brandId?: string | null;
	mainCard: boolean;
	name: string;
	description: string | null;
	rating: string | null;
	price: string | null;
	priceOld: string | null;
	url?: string | null;
	amountComments?: string | null;
	currency?: string | null;
	sku: number;
	status: 'I' | 'O' | 'P';
	sibling_name: string;
	manufacturer: string | null;
	categories: string[];
	options: string[];
};

interface Image {
	id: string;
	order: number;
	url: string;
}

interface Sibling {
	id: string;
	name: string;
}

type FAQData = {
	question: string;
	answer: string;
};
