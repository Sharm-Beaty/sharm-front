"use client";
import { usePathname } from "next/navigation";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import { DeliveryInfoProps } from "../interfaces";
import "./DeliveryInfo.scss";

const DeliveryStatus: React.FC<DeliveryInfoProps> = () => {
  const pathname = usePathname();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <Breadcrumbs path={pathname} />
      <div className="delivery-section">
        {isMobile ? (
          <SidebarMobile initialMenuItem="Мої дані" />
        ) : (
          <SidebarDesktop />
        )}
        <h2>Адреси доставки</h2>
      </div>
    </>
  );
};
export default DeliveryStatus;
