import Sidebar from "../Sidebar";
import { OrderStatusProps } from "../interfaces";

const DeliveryStatus: React.FC<OrderStatusProps> = () => {
  return (
    <div>
      <Sidebar />
      <h2>Адреси доставки</h2>
    </div>
  );
};
export default DeliveryStatus;
