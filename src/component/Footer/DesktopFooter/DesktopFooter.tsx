import Image from "next/image";
import "./DesktopFooter.scss";
import {footerData, mobileData} from "../footerData";
import {ActiveLink} from "../../UI/ActiveLink/ActivLink";
import {Visa, Mastercard, Twitter, Insta, Facebook} from "../../svg/";

export const DesktopFooter = () => {
    return (
        <>
            <div className="footer-desktop-container desktop-only">
                <div className="footer-navigation-menu">
                    {footerData.map(({id, titleName, names}) => (
                        <ul key={id}>
                            <li className="footer-navigation-menu-title">
                                {titleName}
                            </li>
                            {names.map(({id, name, path}) => (
                                <li
                                    key={id}
                                    className="footer-navigation-menu-item"
                                >
                                    <ActiveLink rout={path}>{name}</ActiveLink>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="footer-info">
                    <a
                        href="/"
                        style={{display: "inline-block", paddingTop: "30px"}}
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={99}
                        />
                    </a>
                    <h4 className="footer-info-title">Ми завжди на звʼязку!</h4>
                    <ul style={{display: "flex", marginBottom: "12px"}}>
                        <li className="footer-social-item ">
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
                        <li className="footer-social-item ">
                            <a
                                className="footer-social-link"
                                href="/"
                                target="_blank"
                            >
                                <Facebook />
                            </a>
                        </li>
                    </ul>
                    <p className="footer-info-text">
                        Ви можете написати нам лист <br />
                        або зателефонувати за номерами
                    </p>
                    <address className="footer-address">
                        <ul className="footer-contacts-list">
                            <li className="item">
                                <a
                                    className="footer-contacts-email active-link"
                                    href="mailto:info@sharmbeauty.ua"
                                >
                                    info@sharmbeauty.ua
                                </a>
                            </li>
                            <li className="item">
                                <a
                                    className="footer-contacts-phone active-link"
                                    href="tel:0800505113"
                                >
                                    0 (800) 50 51 13
                                </a>
                            </li>
                            <li className="item">
                                <a
                                    className="footer-contacts-phone active-link"
                                    href="tel:0442993555"
                                >
                                    (044) 299 35 55
                                </a>
                            </li>
                        </ul>
                    </address>
                    <p className="footer-working-hours">
                        Щоденно з 8:00 до 20:00
                    </p>
                    <Visa />
                    <Mastercard />
                </div>
            </div>
            <div
                className="footer-desktop-about desktop-only"
                dangerouslySetInnerHTML={{
                    __html: mobileData.siteDescription,
                }}
            />
        </>
    );
};
