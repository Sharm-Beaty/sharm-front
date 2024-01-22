import Sidebar from "../Sidebar";
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
