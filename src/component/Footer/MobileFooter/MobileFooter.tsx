import "./MobileFooter.scss";
import {Accordion} from "../../Accordion";
import {Twitter, Facebook, Insta, Phone} from "../../svg";
import {mobileData} from "../footerData";
import {ReadMore} from "../../ReadMore";

export const MobileFooter = () => {
    return (
        <div className="mobile-only footer-mobile-container">
            <div className="footer-mobile-information">
                <Accordion
                    title={mobileData.ourShops.title}
                    content={mobileData.ourShops.content}
                />
                <Accordion
                    title={mobileData.aboutUs.title}
                    content={mobileData.aboutUs.content}
                />
                <a href="tel:0800505113" className="footer-pnohe active-link">
                    <Phone />
                    <span>[0800 50 51 13]</span>
                </a>
                <ul className="footer-social-list">
                    <li className="footer-social-item">
                        <a
                            className="footer-social-link"
                            href="/"
                            target="_blank"
                        >
                            <Twitter />
                        </a>
                    </li>
                    <li className="footer-social-item">
                        <a
                            className="footer-social-link"
                            href="/"
                            target="_blank"
                        >
                            <Insta />
                        </a>
                    </li>
                    <li className="footer-social-item">
                        <a
                            className="footer-social-link"
                            href="/"
                            target="_blank"
                        >
                            <Facebook />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-mobile-about">
                <ReadMore content={mobileData.siteDescription} />
            </div>
        </div>
    );
};
