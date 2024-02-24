"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { NavLinkPropsMobile, SidebarProps } from "../../interfaces";
import "./SidebarMobile.scss";
import {
  VectorDown,
  VectorUp,
  LogoutIcon,
  UserIcon,
  ClarityIcon,
  LocationIcon,
  MailIcon,
  HeartIcon,
} from "@/component/svg";

const menuItems = [
  {
    text: "Мої дані",
    icon: <UserIcon className="svg-icon" color="var(--color-primary)" />,
    path: "/ru/account",
  },
  { text: "Мої замовлення", icon: <ClarityIcon />, path: "/ru/my-orders" },
  {
    text: "Адреси доставки",
    icon: <LocationIcon />,
    path: "/ru/delivery-info",
  },
  { text: "Сповіщення", icon: <MailIcon />, path: "/ru/notifications" },
  { text: "Список бажань", icon: <HeartIcon />, path: "/ru/favorite" },
  { text: "Вихід", icon: <LogoutIcon />, path: "/" },
];

const NavLink: React.FC<NavLinkPropsMobile> = ({
  to,
  icon,
  text,
  updateCurrentMenuItem,
  currentMenuItem,
}) => (
  <NextLink href={to}>
    <div className="nav-link" onClick={() => updateCurrentMenuItem(text)}>
      <div className="icon-container">
        <div className="svg-icon">{icon}</div>
      </div>
      <div className="text-container-mobile">{text}</div>
    </div>
  </NextLink>
);

const SidebarMobile: React.FC<SidebarProps> = ({ initialMenuItem }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(initialMenuItem);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectIcon = (text: string) => {
    switch (text) {
      case "Мої замовлення":
        return <ClarityIcon />;
      case "Адреси доставки":
        return <LocationIcon />;
      case "Сповіщення":
        return <MailIcon />;
      case "Список бажань":
        return <HeartIcon />;
      case "Вихід":
        return <LogoutIcon />;
      default:
        return <UserIcon />;
    }
  };

  const vectorIcon = isMenuOpen ? <VectorUp /> : <VectorDown />;

  return (
    <div className="client-sidebar-mobile">
      <div className="menu-header" onClick={toggleMenu}>
        <div className="nav-link">
          <div className="icon-container svg-icon-red">
            {selectIcon(currentMenuItem)}
          </div>
          <div className="text-container">{currentMenuItem}</div>
          <div className="icon-vector">{vectorIcon}</div>
        </div>
      </div>

      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {menuItems.map(
            (item) =>
              item.text !== currentMenuItem && (
                <li key={item.text}>
                  <NavLink
                    to={item.path}
                    icon={item.icon}
                    text={item.text}
                    updateCurrentMenuItem={setCurrentMenuItem}
                    currentMenuItem={currentMenuItem}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMobile;
