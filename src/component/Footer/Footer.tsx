import "./Footer.scss";
import {DesktopFooter} from "./DesktopFooter";
import {MobileFooter} from "./MobileFooter";
import {Line} from "../UI/Line/Line";

export const Footer = () => {
    return (
        <footer id="footer">
            <Line isAbsolute />
            <DesktopFooter />
            <MobileFooter />
            <div className="footer-copyright-container">
                <p className="footer-copyright-text">
                    Інтернет-магазин преміальної декоративної косметики Sharm
                    Beauty
                    <br />
                    {`Copyright Ⓒ 2019-${new Date().getFullYear()}`}
                </p>
            </div>
        </footer>
    );
};
