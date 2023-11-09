import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../components/Banner"), { ssr: false });

export default async function Home() {
    return (
        <>
            <Banner />
        </>
    );
}
