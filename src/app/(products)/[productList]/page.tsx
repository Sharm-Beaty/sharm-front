import {getInfo} from "@/app/acrions/getInfo";



export default async function ProductList({params}: any) {

    const productList = await getInfo("")

    return (
        <>
            <>Page {params.productList}</>
        </>
    );
}
