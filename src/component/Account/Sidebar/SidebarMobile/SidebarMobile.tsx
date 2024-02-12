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

const menuItems = [
  { text: "Мої дані", icon: <User />, path: "/ru/account" },
  { text: "Мої замовлення", icon: <Clarity />, path: "/ru/my-orders" },
  { text: "Адреси доставки", icon: <Location />, path: "/ru/delivery-info" },
  { text: "Сповіщення", icon: <Mail />, path: "/ru/notifications" },
  { text: "Список бажань", icon: <Heart />, path: "/ru/favorite" },
  { text: "Вихід", icon: <Logout />, path: "/" },
];

const NavLink: React.FC<
  NavLinkProps & {
    updateCurrentMenuItem: (text: string) => void;
    currentMenuItem: string;
  }
> = ({ to, icon, text, updateCurrentMenuItem, currentMenuItem }) => {
  const isMenuHeader = currentMenuItem === text;
  const iconElement = icon
    ? React.cloneElement(icon as React.ReactElement<any>, {
        className: isMenuHeader ? "svg-icon" : "",
      })
    : null;

  return (
    <NextLink href={to}>
      <div className="nav-link" onClick={() => updateCurrentMenuItem(text)}>
        <div className="icon-container">{iconElement}</div>
        <div className="text-container-mobile">{text}</div>
      </div>
    </NextLink>
  );
};

// const NavLink: React.FC<
//   NavLinkProps & { updateCurrentMenuItem: (text: string) => void }
// > = ({ to, icon, text, updateCurrentMenuItem }) => (
//   <NextLink href={to}>
//     <div className="nav-link" onClick={() => updateCurrentMenuItem(text)}>
//       <div className="icon-container">{icon}</div>
//       <div className="text-container-mobile">{text}</div>
//     </div>
//   </NextLink>
// );

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
          <div className="icon-container">{selectIcon(currentMenuItem)}</div>
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

export default Sidebar;
