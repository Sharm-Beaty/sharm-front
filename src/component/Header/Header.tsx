import React from 'react';
import Image from "next/image";
import "./Header.scss"
import {ActiveLink} from "../UI/ActiveLink/ActivLink";
import {Search} from "@/component/svg/Search";
import {Menu} from "@/component/Header/Menu/Menu";
import {MobileMenu} from "@/component/Header/MobileMenu/MobileMenu";
import {Line} from "@/component/UI/Line/Line";
import { MyModal } from '../MyModal/MyModal';
import {LanguageComponent} from '../LanguageComponent/LanguageComponent'

export const Header = () => {

    return (
        <header>
            <div className="top-bar-header">
                <div className='first-header-component'>
                <a href="tel:+380123456789" className="phone-top-bar active-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path
                            d="M19.2395 14.4032V17.0579C19.2405 17.3044 19.19 17.5483 19.0913 17.7741C18.9925 17.9999 18.8477 18.2026 18.6661 18.3693C18.4845 18.5359 18.2701 18.6627 18.0366 18.7417C17.8032 18.8206 17.5558 18.85 17.3103 18.8278C14.5873 18.5319 11.9716 17.6014 9.67345 16.1111C7.53532 14.7524 5.72257 12.9396 4.36391 10.8015C2.86837 8.49293 1.93767 5.86452 1.6472 3.12923C1.62508 2.88452 1.65417 2.63789 1.73259 2.40503C1.81102 2.17218 1.93707 1.9582 2.10273 1.77673C2.26838 1.59526 2.47 1.45027 2.69476 1.351C2.91952 1.25172 3.16249 1.20033 3.40819 1.2001H6.06296C6.49242 1.19587 6.90877 1.34795 7.23439 1.62799C7.56002 1.90802 7.7727 2.29691 7.83281 2.72217C7.94486 3.57175 8.15267 4.40593 8.45226 5.2088C8.57132 5.52554 8.59709 5.86976 8.52651 6.20069C8.45593 6.53162 8.29196 6.83539 8.05404 7.07599L6.93019 8.19984C8.18993 10.4153 10.0243 12.2496 12.2397 13.5094L13.3636 12.3855C13.6042 12.1476 13.9079 11.9836 14.2389 11.9131C14.5698 11.8425 14.914 11.8683 15.2308 11.9873C16.0336 12.2869 16.8678 12.4947 17.7174 12.6068C18.1473 12.6674 18.5399 12.8839 18.8205 13.2151C19.1011 13.5464 19.2502 13.9692 19.2395 14.4032Z"
                            stroke="#828282" strokeWidth="1.76" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className='phone-number'>
                             [0800 50 51 13]
                    </span>
                </a>
                <button className="phone-button">
                             Замовити дзвінок
                    </button>
                </div>


                <div className="list-top-bar-header">
                    <ul>
                        <li>
                            <ActiveLink rout={"/promotional-offers"}>
                                Акційні пропозиції
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink rout={"/delivery-payment"}>
                                Доставка і Оплата
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink rout={"/articles"}>
                                Статті
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink rout={"/our-team"}>
                                Наша команда
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink rout={"/about"}>
                                Про магазин
                            </ActiveLink>
                        </li>
                    </ul>
                </div>

                <div className="language-top-bar-header">
                    <LanguageComponent/>

                </div>

            </div>

            <div className="main-header">
                <MobileMenu/>
                <div
                    className="search"
                >
                    <Search/>
                    <input
                        type="test"
                        placeholder="Пошук"
                    />
                </div>

                
                <a href='/'>
                <Image className="logo-top-bar-header" src={"/logo.png"} alt={"logo"} width={200} height={99}/>
                </a>

                <div
                    className="user-actions-header"
                >
                    <Search/>
                    <Image className="person" src={"/person.fill.png"} alt={"logo"} width={19} height={19}/>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path
                            d="M6.54686 15.5968C6.92466 15.5968 7.23093 15.2905 7.23093 14.9127C7.23093 14.5349 6.92466 14.2286 6.54686 14.2286C6.16906 14.2286 5.86279 14.5349 5.86279 14.9127C5.86279 15.2905 6.16906 15.5968 6.54686 15.5968Z"
                            stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M14.0716 15.5968C14.4494 15.5968 14.7557 15.2905 14.7557 14.9127C14.7557 14.5349 14.4494 14.2286 14.0716 14.2286C13.6938 14.2286 13.3876 14.5349 13.3876 14.9127C13.3876 15.2905 13.6938 15.5968 14.0716 15.5968Z"
                            stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M1.07422 1.23132H3.81049L5.6438 10.391C5.70635 10.7059 5.87768 10.9888 6.12781 11.1902C6.37793 11.3915 6.6909 11.4985 7.01193 11.4923H13.6611C13.9821 11.4985 14.2951 11.3915 14.5452 11.1902C14.7953 10.9888 14.9667 10.7059 15.0292 10.391L16.1237 4.65166H4.49456"
                            stroke="#363636" strokeWidth="1.58416" strokeLinecap="round" strokeLinejoin="round"/> 
                    </svg>
                </div>
            </div>
            <Line isAbsolute={false} isMobile={true}/>
            <Menu/>
            <Line isAbsolute={false}/>
        </header>
    );
};
