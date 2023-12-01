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
		currency: '$',
		price: 356.28,
		discountedPrice: 476.13,
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
		currency: '$',
		price: 599.76,
		discountedPrice: 457.82,
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
		currency: '$',
		price: 903.77,
		discountedPrice: 151.55,
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
		currency: '$',
		price: 726.65,
		discountedPrice: 474.68,
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
		currency: '$',
		price: 139.52,
		discountedPrice: 358.9,
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
		currency: '$',
		price: 607.93,
		discountedPrice: 268.38,
		get img() {
			return `https://fakeimg.pl/200x270/5fa2dd/ffffff/?text=Product${this.id}`;
		},
		img_alt: 'in',
	},
];
