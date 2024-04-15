import { getInfo } from '@/app/acrions/getInfo';
import { ProductList } from '@/component/ProductList';
import { productList } from '@/mock';
import { unstable_setRequestLocale } from 'next-intl/server';
export default async function PageProductList({ params }: any) {
	unstable_setRequestLocale(params.locale);
	// const productList = await getInfo("")

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<aside style={{ flex: '0 1 25%' }}>
				<h2>Sidebar</h2>
			</aside>
			<ProductList productList={productList} />
		</div>
	);
}
