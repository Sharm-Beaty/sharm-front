type OptionsForFormattedPrice = {
	locales?: string;
	currency?: string;
	currencyDisplay?: 'narrowSymbol' | 'symbol' | 'name' | 'code';
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
}

type DiscountedProducts = {
	id: string;
	createdAt: string;
	updatedAt: string;
	images: Image[];
	isLuxury: boolean;
	siblings: Sibling[];
	mainCard: boolean;
	name: string;
	description: string | null;
	rating: string | null;
	price: string | null;
	discountedPrice?: string | null;
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
}