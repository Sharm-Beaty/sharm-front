import DeliveryStatus from "@/component/Account/DeliveryInfo/DeliveryInfo";

export default function MyDeliveryInfo({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  return (
    <>
      {locale}
      <DeliveryStatus />
    </>
  );
}
