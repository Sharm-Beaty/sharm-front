import React from "react";
import { LogoutIcon } from "../../../svg/LogoutIcon";
import { UserIcon } from "../../../svg/UserIcon";
import { ClarityIcon } from "../../../svg/ClarityIcon";
import { LocationIcon } from "../../../svg/LocationIcon";
import { MailIcon } from "../../../svg/MailIcon";
import { HeartIcon } from "../../../svg/HeartIcon";
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
    <NavLink to="/ru/account" icon={<UserIcon />} text="Мої дані" />
    <NavLink to="/ru/my-orders" icon={<ClarityIcon />} text="Мої замовлення" />
    <NavLink
      to="/ru/delivery-info"
      icon={<LocationIcon />}
      text="Адреси доставки"
    />
    <NavLink to="/ru/notifications" icon={<MailIcon />} text="Сповіщення" />
    <NavLink to="/ru/favorite" icon={<HeartIcon />} text="Список бажань" />
    <NavLink to="/" icon={<LogoutIcon />} text="Вихід" />
  </div>
);

export default SidebarDesktop;
