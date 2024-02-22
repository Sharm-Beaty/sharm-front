import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import('./ProductList'));

export { ProductList };
