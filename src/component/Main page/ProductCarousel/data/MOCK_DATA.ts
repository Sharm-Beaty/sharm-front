import { Product } from '../types/types';

export const products: Product[] = [
	{
		id: 1,
		title: 'Dr. Wai in the Scriptures with No Words',
		subTitle:
			'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		rating: 2.10305,
		inFavorites: false,
		amountComments: 2,
		price: '$356.28',
		discountedPrice: '$476.13',
		get img() {
			return `https://fakeimg.pl/200x270/ff4444/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'curabitur at ipsum',
	},
	{
		id: 2,
		title: 'McCabe & Mrs. Miller',
		subTitle:
			'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		rating: 2.53532,
		inFavorites: false,
		amountComments: 3,
		price: '$599.76',
		discountedPrice: '$457.82',
		get img() {
			return `https://fakeimg.pl/200x270/cc0000/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'ut nunc',
	},
	{
		id: 3,
		title: 'Dirty Dozen, The',
		subTitle: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
		rating: 3.36056,
		inFavorites: true,
		amountComments: 41,
		price: '$903.77',
		discountedPrice: '$151.55',
		get img() {
			return `https://fakeimg.pl/200x270/cc0000/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'vulputate nonummy maecenas',
	},
	{
		id: 4,
		title: 'Shanghai Knights',
		subTitle:
			'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		rating: 3.95913,
		inFavorites: true,
		amountComments: 97,
		price: '$726.65',
		discountedPrice: '$474.68',
		get img() {
			return `https://fakeimg.pl/200x270/ff4444/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'libero nullam sit',
	},
	{
		id: 5,
		title: 'Flower Drum Song',
		subTitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		rating: 4.19965,
		inFavorites: true,
		amountComments: 85,
		price: '$139.52',
		discountedPrice: '$358.90',
		get img() {
			return `https://fakeimg.pl/200x270/5fa2dd/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'orci luctus',
	},
	{
		id: 6,
		title: "Sky's the Limit, The",
		subTitle:
			'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		rating: 3.57089,
		inFavorites: true,
		amountComments: 39,
		price: '$607.93',
		discountedPrice: '$268.38',
		get img() {
			return `https://fakeimg.pl/200x270/5fa2dd/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'in',
	},
	{
		id: 7,
		title: 'Chapiteau-show (Shapito-shou)',
		subTitle: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
		rating: 4.64157,
		inFavorites: false,
		amountComments: 90,
		price: '$366.95',
		discountedPrice: '$192.60',
		get img() {
			return `https://fakeimg.pl/200x270/dddddd/000000/?text=Product${this.id}`;
		},
		img_alt: 'in magna',
	},
	{
		id: 8,
		title: 'Strange Bedfellows',
		subTitle:
			'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
		rating: 4.72661,
		inFavorites: false,
		amountComments: 61,
		price: '$243.22',
		discountedPrice: '$490.74',
		get img() {
			return `https://fakeimg.pl/200x270/ff4444/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'nulla neque libero',
	},
	{
		id: 9,
		title: 'Striptease',
		subTitle:
			'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
		rating: 4.42448,
		inFavorites: false,
		amountComments: 24,
		price: '$642.83',
		discountedPrice: '$381.27',
		get img() {
			return `https://fakeimg.pl/200x270/dddddd/000000/?text=Product${this.id}`;
		},
		img_alt: 'lectus pellentesque at',
	},
	{
		id: 10,
		title: 'Tattooed Life (Irezumi ichidai)',
		subTitle:
			'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
		rating: 4.92183,
		inFavorites: false,
		amountComments: 16,
		price: '$588.38',
		discountedPrice: '$100.40',
		get img() {
			return `https://fakeimg.pl/200x270/ff4444/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'ligula in',
	},
];
