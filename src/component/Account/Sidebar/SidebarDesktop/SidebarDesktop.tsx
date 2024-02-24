"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import {
  LogoutIcon,
  UserIcon,
  ClarityIcon,
  LocationIcon,
  MailIcon,
  HeartIcon,
} from "@/component/svg";
import { NavLinkProps } from "../../interfaces";
import "./SidebarDesktop.scss";

const NavLink: React.FC<NavLinkProps> = ({ to, text, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <NextLink href={to}>
      <div className={`nav-link ${isActive ? "active" : ""}`}>
        <div className="icon-container">
          <div className="svg-icon">{icon}</div>
        </div>
        <div className="text-container">{text}</div>
      </div>
    </NextLink>
  );
};

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
