type SchemaAggregateRating = {
	'@type': 'AggregateRating';
	ratingValue: number;
	reviewCount: number;
	ratingCount?: number; //The count of users who have rated the product.
};

enum AvailabilityEnum {
	'https://schema.org/BackOrder',
	'https://schema.org/Discontinued',
	'https://schema.org/InStock',
	'https://schema.org/InStoreOnly',
	'https://schema.org/LimitedAvailability',
	'https://schema.org/OnlineOnly',
	'https://schema.org/OutOfStock',
	'https://schema.org/PreOrder',
	'https://schema.org/PreSale',
	'https://schema.org/SoldOut',
}

type SchemaOffers = {
	'@type': 'Offer';
	availability: keyof typeof AvailabilityEnum;
	price: number | string;
	priceCurrency: string;
	offeredBy?: SchemaOfferedBy; //A pointer to the organization or person making the offer.
};

type SchemaOfferedBy = {
	'@type': string | 'Organization';
	schemaID: string; //actual this is [@id] The unique identifier of the schema. [canonical url of shop]
	name: string;
};

type SchemaReview = {
	'@type': 'Review';
	author: string;
	datePublished: string;
	reviewBody: string;
	name: string;
	reviewRating: SchemaReviewRating;
};

type SchemaReviewRating = {
	'@type': 'Rating';
	bestRating: number;
	ratingValue: number;
	worstRating: number;
};

type SchemaBrand = {
	'@type': 'Brand';
	name: string;
};

type SchemaProductInfo = {
	'@context': 'https://schema.org';
	'@type': 'Product' | string[] | string;
	category: string;
	brand: SchemaBrand;
	url: string;
	aggregateRating: SchemaAggregateRating;
	description: string;
	name: string;
	image: string;
	offers: SchemaOffers;
	review: SchemaReview[];
	productionDate?: Date;
};
