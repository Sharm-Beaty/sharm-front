import Sidebar from "../Sidebar/SidebarMobile/SidebarMobile";
import { OrderStatusProps } from "../interfaces";

const OrderStatus: React.FC<OrderStatusProps> = () => {
  return (
    <div className="order-section">
      <Sidebar />
      <h2>Мої замовлення</h2>
    </div>
  );
};
export default OrderStatus;
