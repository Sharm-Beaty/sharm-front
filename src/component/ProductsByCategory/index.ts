import dynamic from 'next/dynamic';

const ProductsByCategory = dynamic(() => import('./ProductsByCategory'));

export { ProductsByCategory };
