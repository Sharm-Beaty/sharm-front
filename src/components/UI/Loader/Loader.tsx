import { Loader as LoaderSvg } from "../../svg/";
import "./Loader.scss";

export const Loader = ({ width = 128, height = 128 }) => (
    <div className="loader-container">
        <LoaderSvg width={width} height={height} />
    </div>
);
