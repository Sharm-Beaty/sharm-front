import "./Footer.scss";
import {DesktopFooter} from "./DesktopFooter";
import {MobileFooter} from "./MobileFooter";

export const Footer = () => {
    return (
        <footer id="footer">
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
