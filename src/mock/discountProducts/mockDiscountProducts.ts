export const products: DiscountedProducts[] = [
	{
		id: '491985a2-7297-4b40-8b79-65f19dafd694',
		createdAt: '9/27/2023',
		updatedAt: '1/21/2023',
		images: [
			{
				id: '1',
				order: 1,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
			{
				id: '1',
				order: 1,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'nulla eget',
		description:
			'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
		rating: '4',
		discountedPrice: '100',
		price: '333',
		sku: 11,
		status: 'P',
		sibling_name: 'Heparin Sodium',
		manufacturer: 'dc574eee1c77c75c4981f6ccb806dc5b8f12581f1feb1312f972e7b4ecad5a68',
		categories: [''],
		options: [''],
	},
	{
		id: '0c1f922e-ec11-40f2-93f4-8466929091b5',
		createdAt: '1/5/2024',
		updatedAt: '5/29/2023',
		images: [
			{
				id: '2',
				order: 2,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
			{
				id: '2',
				order: 2,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
			{
				id: '2',
				order: 2,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'vel ipsum',
		description:
			'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
		rating: '1',
		discountedPrice: '100',
		price: '111',
		sku: 22,
		status: 'O',
		sibling_name: 'Strawberry',
		manufacturer: '9b43c8585db913a35c17e7782fbdd89e97d4437e630958f11b7931bce1fa65ec',
		categories: [''],
		options: [''],
	},
	{
		id: 'cc9ed58c-3a67-479b-9e87-c9db8d3b9368',
		createdAt: '5/4/2023',
		updatedAt: '8/9/2023',
		images: [
			{
				id: '3',
				order: 3,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
			{
				id: '3',
				order: 3,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
			{
				id: '3',
				order: 3,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: false,
		name: 'non',
		description:
			'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
		rating: '5',
		discountedPrice: '100',
		price: '245',
		sku: 33,
		status: 'P',
		sibling_name: 'Zolmitriptan',
		manufacturer: '8ba8f2a35334485ec96cfa6e61304cd80023e7b58e5df4a293e0ba0aed69ae2a',
		categories: [''],
		options: [''],
	},
	{
		id: 'ca811a28-2831-4f39-a072-2765a2df3226',
		createdAt: '3/13/2023',
		updatedAt: '4/10/2023',
		images: [
			{
				id: '4',
				order: 4,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'ut ultrices',
		description: 'In eleifend quam a odio.',
		rating: '3',
		discountedPrice: '100',
		price: '567',
		sku: 1234,
		status: 'O',
		sibling_name: 'Sweet Daisy Antibacterial Hand Sanitizer',
		manufacturer: '2f1231c22bac9aba4fca23a02963e8152019e2269660dfd8522df343c1647926',
		categories: [''],
		options: [''],
	},
	{
		id: 'e7893a70-22ca-43b8-898e-5fb284c9a474',
		createdAt: '1/21/2023',
		updatedAt: '6/19/2023',
		images: [
			{
				id: '5',
				order: 5,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: false,
		name: 'non interdum',
		description: 'Praesent blandit.',
		rating: '1',
		discountedPrice: '100',
		price: '2131',
		sku: 3244,
		status: 'I',
		sibling_name: 'IBUPROFEN',
		manufacturer: 'fac01adddcd060fcd31ffb73674ea0c1d7efba9ecbfcbd8f2e14b53043c0b86f',
		categories: [''],
		options: [''],
	},
	{
		id: 'edbb2904-446d-479d-a51f-da524db7fa5d',
		createdAt: '2/23/2023',
		updatedAt: '6/19/2023',
		images: [
			{
				id: '5',
				order: 5,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: true,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'accumsan',
		description:
			'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
		rating: '2',
		discountedPrice: '100',
		price: '3111',
		sku: 235,
		status: 'O',
		sibling_name: 'Aveeno Active Naturals Clear Complexion BB',
		manufacturer: '8972c194d0e4f882eea2bc1a125392b4d8216994baac4c3b87cdf1f40a2ccce5',
		categories: [''],
		options: [''],
	},
	{
		id: '6bf3ad45-7d63-451e-99ef-06b3e3c1fbc8',
		createdAt: '7/3/2023',
		updatedAt: '8/14/2023',
		images: [
			{
				id: '5',
				order: 5,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: false,
		name: 'nec',
		description: 'Nunc purus. Phasellus in felis.',
		rating: '4',
		discountedPrice: '100',
		price: '54',
		sku: 2314,
		status: 'P',
		sibling_name: 'Ibuprofen',
		manufacturer: 'f8a2614b4343b82944763b56556b04f8fab4337d0ba98b779aa6489ec6897545',
		categories: [''],
		options: [''],
	},
	{
		id: '73b642dd-20c5-471f-91b9-dcf8d4d10aff',
		createdAt: '2/26/2023',
		updatedAt: '8/21/2023',
		images: [
			{
				id: '6',
				order: 6,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: true,
		siblings: [{ id: '', name: '' }],
		mainCard: false,
		name: 'lorem',
		description:
			'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
		rating: '3',
		discountedPrice: '100',
		price: '564',
		sku: 124,
		status: 'O',
		sibling_name: 'TUMS',
		manufacturer: '475cb07137af4944b1307274b6f607fb05b7bda1cf630c59fc5f862b0843efdb',
		categories: [''],
		options: [''],
	},
	{
		id: 'd506e2fd-f4fe-41db-91a3-24e2a646dee7',
		createdAt: '3/17/2023',
		updatedAt: '11/29/2023',
		images: [
			{
				id: '1',
				order: 1,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'luctus tincidunt',
		description: 'Donec posuere metus vitae ipsum.',
		rating: '4',
		discountedPrice: '100',
		price: '89',
		sku: 1245,
		status: 'O',
		sibling_name: 'All Day Allergy Relief',
		manufacturer: 'a150bc55221c68eaf38c1ede17c693661bd8e0047aab333a2acd8d8e41b4bc06',
		categories: [''],
		options: [''],
	},
	{
		id: '6bd36cc3-c871-45fc-8a95-89b5d8577336',
		createdAt: '5/12/2023',
		updatedAt: '12/17/2023',
		images: [
			{
				id: '2',
				order: 2,
				get url() {
					return `/product-carousel/${this.id}.png`;
				},
			},
		],
		isLuxury: false,
		siblings: [{ id: '', name: '' }],
		mainCard: true,
		name: 'vel',
		description:
			'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		rating: '5',
		discountedPrice: '100',
		price: '80',
		sku: 8970,
		status: 'I',
		sibling_name: 'Health Mart Loperamide Hydrochloride',
		manufacturer: '8bc98f1c5623f47f43c084d6a417a6c4db138f7e67a847e7aea0d4015278fa65',
		categories: [''],
		options: [''],
	},
];
