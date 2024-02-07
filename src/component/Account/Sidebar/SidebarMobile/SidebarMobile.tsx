"use client";
import React, { useState } from "react";
import { Logout } from "../../../svg/Logout";
import { User } from "../../../svg/User";
import { Clarity } from "../../../svg/Clarity";
import { Location } from "../../../svg/Location";
import { Mail } from "../../../svg/Mail";
import { Heart } from "../../../svg/Heart";
import { NavLinkProps, SidebarProps } from "../../interfaces";
import NextLink from "next/link";
import "./SidebarMobile.scss";

const NavLink: React.FC<NavLinkProps> = ({ to, text, icon }) => (
  <NextLink href={to}>
    <div className="nav-link">
      <div className="icon-container">{icon}</div>
      <div className="text-container">{text}</div>
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

  return (
    <div className="client-sidebar">
      <div className="menu-header" onClick={toggleMenu}>
        <div className="nav-link">
          <div className="icon-container"> {selectIcon(currentMenuItem)}</div>
          <div className="text-container">{currentMenuItem}</div>
        </div>
      </div>

      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/ru/account" icon={<User />} text="Мої дані" />
        <NavLink to="/ru/my-orders" icon={<Clarity />} text="Мої замовлення" />
        <NavLink
          to="/ru/delivery-info"
          icon={<Location />}
          text="Адреси доставки"
        />
        <NavLink to="/ru/notifications" icon={<Mail />} text="Сповіщення" />
        <NavLink to="/ru/favorite " icon={<Heart />} text="Список бажань" />
        <NavLink to="/" icon={<Logout />} text="Вихід" />
      </div>
    </div>
  );
};

export default Sidebar;
