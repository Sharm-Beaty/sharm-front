import OrderStatus from "@/component/Account/OrderStatus/OrderStatus";

export default function MyOrders({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <>
      {locale}
      <OrderStatus />
    </>
  );
}
