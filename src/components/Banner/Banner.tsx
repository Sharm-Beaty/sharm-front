import dynamic from "next/dynamic";

import { Loader } from "../UI/Loader";
import "./Banner.scss";

const Slider = dynamic(() => import("./Slider"), {
    ssr: false,
    loading: () => <Loader />,
});

const Banner = () => {
    return (
        <section className="banner">
            <Slider />
        </section>
    );
};
export default Banner;
