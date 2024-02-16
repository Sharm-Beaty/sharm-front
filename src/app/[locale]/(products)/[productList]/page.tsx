import { getInfo } from '@/app/acrions/getInfo';
import { ProductsByCategory } from '@/component/ProductsByCategory';
import { unstable_setRequestLocale } from 'next-intl/server';
export default async function ProductList({ params }: any) {
	unstable_setRequestLocale(params.locale);
	// const productList = await getInfo("")

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<aside style={{ flex: '0 1 30%' }}>
				<h2>Sidebar</h2>
			</aside>
			<ProductsByCategory />
		</div>
	);
}
