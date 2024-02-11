"use client";
import React, { useState } from "react";
import { NavLinkProps, SidebarProps } from "../../interfaces";
import NextLink from "next/link";
import "./SidebarMobile.scss";
import {
  VectorDown,
  VectorUp,
  Logout,
  User,
  Clarity,
  Location,
  Mail,
  Heart,
} from "@/component/svg";

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text }) => (
  <NextLink href={to}>
    <div className="nav-link">
      <div className="icon-container">{icon}</div>
      <div className="text-container-mobile">{text}</div>
    </div>
  </NextLink>
);

const Sidebar: React.FC<SidebarProps> = ({ initialMenuItem }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(initialMenuItem);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectIcon = (text: string) => {
    switch (text) {
      case "Мої замовлення":
        return <Clarity />;
      case "Адреси доставки":
        return <Location />;
      case "Сповіщення":
        return <Mail />;
      case "Список бажань":
        return <Heart />;
      case "Вихід":
        return <Logout />;
      default:
        return <User />;
    }
  };

  const vectorIcon = isMenuOpen ? <VectorUp /> : <VectorDown />;

  return (
    <div className="client-sidebar-mobile">
      <div className="menu-header" onClick={toggleMenu}>
        <div className="nav-link">
          <div className="icon-container"> {selectIcon(currentMenuItem)}</div>
          <div className="text-container">{currentMenuItem}</div>
          <div className="icon-vector">{vectorIcon} </div>
        </div>
      </div>

      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/ru/account" icon={<User />} text="Мої дані" />
          </li>
          <li>
            <NavLink
              to="/ru/my-orders"
              icon={<Clarity />}
              text="Мої замовлення"
            />
          </li>
          <li>
            <NavLink
              to="/ru/delivery-info"
              icon={<Location />}
              text="Адреси доставки"
            />
          </li>
          <li>
            <NavLink to="/ru/notifications" icon={<Mail />} text="Сповіщення" />
          </li>
          <li>
            <NavLink to="/ru/favorite" icon={<Heart />} text="Список бажань" />
          </li>
          <li>
            <NavLink to="/" icon={<Logout />} text="Вихід" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
