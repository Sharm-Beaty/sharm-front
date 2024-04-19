"use client";
import { usePathname } from "next/navigation";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import { NotificationsProps } from "../interfaces";
import "./Notifications.scss";

const Notifications: React.FC<NotificationsProps> = () => {
  const pathname = usePathname();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      {!isMobile && <Breadcrumbs path={pathname} />}
      <div className="notifications-section">
        {isMobile ? (
          <SidebarMobile initialMenuItem="Мої дані" />
        ) : (
          <SidebarDesktop />
        )}
        <h2>Сповіщення</h2>
      </div>
    </>
  );
};
export default Notifications;
