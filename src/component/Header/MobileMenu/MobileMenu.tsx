"use client";
import { Accordion } from "@/component/Accordion";
import "./MobileMenu.scss";
// import { menuData } from "@/component/Header/menuData";
// import { ActiveLink } from "@/component/UI/ActiveLink/ActivLink";
import { Arrow, Phone, Search } from "@/component/svg";
import { useGetCategoriesQuery } from "@/hooks/useGetCategoriesQuery";
import classNames from "classnames";
import { useState } from "react";
import Dropdown from "@/component/Dropdown/Dropdown";
import Link from "next/link";
import Shop from "@/component/svg/Shop";
import Image from "next/image";

type Props = {
  isActive: boolean;
};

export const MobileMenu = ({ isActive }: Props) => {
  const { data } = useGetCategoriesQuery();

  return (
    <>
      <div
        className={classNames("mobile-menu", {
          active: isActive,
        })}
      >
        <header className='mobile-menu__header'>
          <form className='mobile-menu__search'>
            <Search
              size={20}
              color={"#828282"}
            />
            <input
              type='text'
              placeholder='Пошук'
            />
          </form>

          <ul className='mobile-menu__list'>
            {data?.map((category) => (
              <Dropdown
                key={category.id}
                title={category.name}
                content={category.children}
              />
            ))}
          </ul>
        </header>
        <main>
          <Link
            href='/'
            className='mobile-menu__link'
          >
            <Shop />
            <p>Моя корзина</p>
          </Link>
          <Link
            href='/'
            className='mobile-menu__link'
          >
            <Image
              className='person'
              src={"/person.fill.png"}
              alt={"logo"}
              width={19}
              height={19}
            />
            <p>Мій акаунт</p>
          </Link>
          <Link
            href='/'
            className='mobile-menu__link'
          >
            <Shop />
            <p>мій список бажань</p>
          </Link>
          <a
            href='tel:0800505113'
            className='mobile-menu__link'
          >
            <Phone size={17} />
            <p>[0800 50 51 13]</p>
          </a>
        </main>
        <footer>
          <span></span>
          <span></span>
        </footer>
      </div>
      {/* <div
                className={`container-open-mobile-menu ${isActive ? 'active' : ''}`}
            >
                <input type="text"/>
                {isActive && <nav>
                    <ul >
                        {
                            menuData.map((item: any) =>
                                <li key={item.id}>
                                    <ActiveLink rout={item.path}>
                                        {item.name}
                                    </ActiveLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>}
            </div> */}
    </>
  );
};
