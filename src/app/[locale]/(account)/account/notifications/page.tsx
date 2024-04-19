import Notifications from "@/component/Account/Notifications/Notifications";

export default function notifications({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  return (
    <>
      {/* {locale} */}
      <Notifications />
    </>
  );
}
