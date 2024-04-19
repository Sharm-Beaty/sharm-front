"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import "./Breadcrumbs.scss";
import { BreadcrumbsProps } from "../interfaces";

const menuItems = [
  { text: "МІЙ КАБІНЕТ", path: "/account" },
  { text: "МОЇ ДАНІ", path: "/account/my-data" },
  { text: "МОЇ ЗАМОВЛЕННЯ", path: "/account/my-orders" },
  { text: "АДРЕСИ ДОСТАВКИ", path: "/account/delivery-info" },
  { text: "СПОВІЩЕННЯ", path: "/account/notifications" },
  { text: "СПИСОК БАЖАНЬ", path: "/account/favorite" },
  { text: "ВИХІД", path: "/account/logout" },
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
          {<span className="breadcrumb-divider">/</span>}
        </li>

        {filteredSegments.map((segment, index) => {
          const isLastSegment = index === filteredSegments.length - 1;
          const menuItem = menuItems.find(
            (item) =>
              item.path === `/${filteredSegments.slice(0, index + 1).join("/")}`
          );
          const displayText = menuItem?.text || segment;
          const className = isLastSegment
            ? "last-breadcrumb breadcrumb-link"
            : "breadcrumb-link";

          return (
            <li key={index}>
              <NextLink
                href={`/${filteredSegments.slice(0, index + 1).join("/")}`}
                className={className}
              >
                {displayText}
              </NextLink>
              {index < filteredSegments.length - 1 && (
                <span className="breadcrumb-divider"> / </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
