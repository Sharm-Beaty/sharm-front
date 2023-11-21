import { Loader as LoaderSvg } from "../../svg/";
import "./Loader.scss";

export const Loader = ({ width = 128, height = 128, className = 'pl' }) => (
    <div className="loader-container">
        <LoaderSvg width={width} height={height} className={className} />
    </div>
);
