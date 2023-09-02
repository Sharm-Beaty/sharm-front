import Image from "next/image";
import "./DesktopFooter.scss";
import {footerData} from "../footerData";
import {ActiveLink} from "../../UI/ActiveLink/ActivLink";
import {Visa} from "../../svg/Visa";
import {Mastercard} from "../../svg/Mastercard";

export const DesktopFooter = () => {
    return (
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
                <Image
                    style={{marginBottom: "10px"}}
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={99}
                />
                <h4 className="footer-info-title">Ми завжди на звʼязку!</h4>
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
                <p className="footer-working-hours">Щоденно з 8:00 до 20:00</p>
                <Visa />
                <Mastercard />
            </div>
        </div>
    );
};
