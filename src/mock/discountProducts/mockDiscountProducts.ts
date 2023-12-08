export const products: DiscountedProducts[] = [
	{
		id: 1,
		title: 'VELVET BLUE MUSK EAU DE PARFUM',
		subTitle:
			'Capturing the suave memories of eternal Sicily, Dolce&Gabbana Velvet Blue Musk unfolds among the intoxicating scents that have long filled the island’s palaces.',
		rating: 2.10305,
		inFavorites: false,
		amountComments: 2,
		url: '/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
		currency: '$',
		price: 476.13,
		discountedPrice: 276.13,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'curabitur at ipsum',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.10305,
				reviewCount: 2,
				ratingCount: 2,
			},
			description: `Capturing the suave memories of eternal Sicily, Dolce&Gabbana Velvet Blue Musk unfolds among the intoxicating scents that have long filled the island’s palaces.

      Like a sweet, enveloping breeze rising from the ancient Arabic monuments, Dolce&Gabbana Velvet Blue Musk enshrines the musk with a warm, shimmering sensuality, in an alchemy of saffron and refined notes of precious damask rose.
      
      Part of the exclusive Dolce&Gabbana Velvet Collection, luxury fragrances embroidered on lush velvet, offering an invitation to discover and explore the brand's creative vision. An intimate and authentic voyage expressed through our Designers' olfactive memories and their love for Italy.
      
      THE DESIGN
      
      The iconic, weighty glass flacon of the Dolce&Gabbana Velvet Collection is topped with a deep blue velvet-trimmed stopper with golden accents, reminiscent of the gold and lapis-lazuli décors of Palermo’s monuments. The flacon of Dolce&Gabbana Velvet Blue Musk Eau de Parfum is also personalized with an engraved golden plate, and comes encased in a black velvet coffret.`,
			name: 'VELVET BLUE MUSK EAU DE PARFUM',
			image: '/product-carousel/1.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 276.13,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
	{
		id: 2,
		title: 'McCabe & Mrs. Miller',
		subTitle:
			'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		rating: 2.53532,
		inFavorites: false,
		amountComments: 3,
		url: '/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
		currency: '$',
		price: 599.76,
		discountedPrice: 457.82,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'ut nunc',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.53532,
				reviewCount: 3,
				ratingCount: 2,
			},
			description:
				'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
			name: 'McCabe & Mrs. Miller',
			image: '/product-carousel/2.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 457.82,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
	{
		id: 3,
		title: 'Dirty Dozen, The',
		subTitle: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
		rating: 3.36056,
		inFavorites: true,
		amountComments: 41,
		url: '#',
		currency: '$',
		price: 903.77,
		discountedPrice: 151.55,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'vulputate nonummy maecenas',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.10305,
				reviewCount: 2,
				ratingCount: 2,
			},
			description: ``,
			name: '',
			image: '/product-carousel/1.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 276.13,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Shanghai Knights',
		subTitle:
			'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		rating: 3.95913,
		inFavorites: true,
		amountComments: 97,
		url: '#',
		currency: '$',
		price: 726.65,
		discountedPrice: 474.68,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'libero nullam sit',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.10305,
				reviewCount: 2,
				ratingCount: 2,
			},
			description: ``,
			name: '',
			image: '/product-carousel/1.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 276.13,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Flower Drum Song',
		subTitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		rating: 4.19965,
		inFavorites: true,
		amountComments: 85,
		url: '#',
		currency: '$',
		price: 139.52,
		discountedPrice: 358.9,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'orci luctus',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.10305,
				reviewCount: 2,
				ratingCount: 2,
			},
			description: ``,
			name: '',
			image: '/product-carousel/1.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 276.13,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
	{
		id: 6,
		title: "Sky's the Limit, The",
		subTitle:
			'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		rating: 3.57089,
		inFavorites: true,
		amountComments: 39,
		url: '#',
		currency: '$',
		price: 607.93,
		discountedPrice: 268.38,
		get img() {
			return `/product-carousel/${this.id}.png`;
		},
		img_alt: 'in',
		additionalSchemaData: {
			'@context': 'https://schema.org',
			'@type': 'Product',
			category: 'Perfumes',
			brand: {
				'@type': 'Brand',
				name: 'Dolce & Gabbana',
			},
			url: 'https://sharmbeauty.ua/product/perfumes/dolceandgabbana/dolce-and-gabbana-velvet-blue-musk-eau-de-parfum-VP0014VP0009V000',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: 2.10305,
				reviewCount: 2,
				ratingCount: 2,
			},
			description: ``,
			name: '',
			image: '/product-carousel/6.png',
			offers: {
				'@type': 'Offer',
				availability: 'https://schema.org/InStock',
				price: 276.13,
				priceCurrency: '$',
				offeredBy: {
					name: '\u0428\u0430\u0440\u043c Beauty',
					'@type': 'Organization',
					schemaID: 'https://sharmbeauty.ua',
				},
			},
			review: [
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 1, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
				{
					author: '',
					datePublished: '',
					name: '',
					reviewBody: '',
					reviewRating: { bestRating: 5, ratingValue: 5, '@type': 'Rating', worstRating: 1 },
					'@type': 'Review',
				},
			],
		},
	},
];
