"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import "./Breadcrumbs.scss";
import { BreadcrumbsProps } from "../interfaces";

const menuItems = [
  { text: "МІЙ КАБІНЕТ", path: "/account" },
  { text: "МОЇ ЗАМОВЛЕННЯ", path: "/my-orders" },
  { text: "АДРЕСИ ДОСТАВКИ", path: "/delivery-info" },
  { text: "СПОВІЩЕННЯ", path: "/notifications" },
  { text: "СПИСОК БАЖАНЬ", path: "/favorite" },
  { text: "Вихід", path: "/logout" },
];

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const filteredSegments = pathSegments.filter((segment) => segment !== "ru");

  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <NextLink href="/" className="breadcrumb-link">
            ШАРМ
          </NextLink>
        </li>
        {filteredSegments.map((segment, index) => (
          <li key={index}>
            <NextLink
              href={`/${filteredSegments.slice(0, index + 1).join("/")}`}
              className="breadcrumb-link"
            >
              {menuItems.find(
                (item) =>
                  item.path ===
                  `/${filteredSegments.slice(0, index + 1).join("/")}`
              )?.text || segment}
            </NextLink>
            {index < filteredSegments.length - 1 && (
              <span className="breadcrumb-divider"> / </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
