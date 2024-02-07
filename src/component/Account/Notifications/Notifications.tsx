import Sidebar from "../Sidebar/SidebarMobile/SidebarMobile";
import { NotificationsProps } from "../interfaces";

const Notifications: React.FC<NotificationsProps> = () => {
  return (
    <div>
      <Sidebar />
      <h2>Сповіщення</h2>
    </div>
  );
};
export default Notifications;
