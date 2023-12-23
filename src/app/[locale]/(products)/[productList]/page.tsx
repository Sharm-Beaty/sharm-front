import {getInfo} from "@/app/acrions/getInfo";
import {unstable_setRequestLocale} from "next-intl/server";



export default async function ProductList({params}: any) {

    unstable_setRequestLocale(params.locale);
    // const productList = await getInfo("")

    return (
        <>
            <>Page {params.productList}</>
        </>
    );
}
