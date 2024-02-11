import React from "react";
import { Logout } from "../../../svg/Logout";
import { User } from "../../../svg/User";
import { Clarity } from "../../../svg/Clarity";
import { Location } from "../../../svg/Location";
import { Mail } from "../../../svg/Mail";
import { Heart } from "../../../svg/Heart";
import { NavLinkProps } from "../../interfaces";
import NextLink from "next/link";
import "./SidebarDesktop.scss";

const NavLink: React.FC<NavLinkProps> = ({ to, text, icon }) => (
  <NextLink href={to}>
    <div className="nav-link">
      <div className="icon-container">{icon}</div>
      <div className="text-container">{text}</div>
    </div>
  </NextLink>
);

const SidebarDesktop: React.FC = () => (
  <div className="client-sidebar-desktop">
    <NavLink to="/ru/account" icon={<User />} text="Мої дані" />
    <NavLink to="/ru/my-orders" icon={<Clarity />} text="Мої замовлення" />
    <NavLink
      to="/ru/delivery-info"
      icon={<Location />}
      text="Адреси доставки"
    />
    <NavLink to="/ru/notifications" icon={<Mail />} text="Сповіщення" />
    <NavLink to="/ru/favorite" icon={<Heart />} text="Список бажань" />
    <NavLink to="/" icon={<Logout />} text="Вихід" />
  </div>
);

export default SidebarDesktop;
