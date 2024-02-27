import MyAccount from "@/component/Account/MyAccount/MyAccount";

export default function MyData({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <>
      {/* {locale} */}
      <MyAccount></MyAccount>
    </>
  );
}
