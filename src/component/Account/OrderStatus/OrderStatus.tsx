"use client";
import { usePathname } from "next/navigation";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import { OrderStatusProps } from "../interfaces";
import "./OrderStatus.scss";

const OrderStatus: React.FC<OrderStatusProps> = () => {
  const pathname = usePathname();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <Breadcrumbs path={pathname} />
      <div className="order-section">
        {isMobile ? (
          <SidebarMobile initialMenuItem="Мої дані" />
        ) : (
          <SidebarDesktop />
        )}
        <h2>Мої замовлення</h2>
      </div>
    </>
  );
};
export default OrderStatus;
