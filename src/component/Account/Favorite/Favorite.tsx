"use client";
import { usePathname } from "next/navigation";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import { FavoritesProps } from "../interfaces";
import "./Favorite.scss";

const Favorites: React.FC<FavoritesProps> = () => {
  const pathname = usePathname();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      {!isMobile && <Breadcrumbs path={pathname} />}
      <div className="favorite-section">
        {isMobile ? (
          <SidebarMobile initialMenuItem="Мої дані" />
        ) : (
          <SidebarDesktop />
        )}
        <h2>Список бажань</h2>
      </div>
    </>
  );
};

export default Favorites;
