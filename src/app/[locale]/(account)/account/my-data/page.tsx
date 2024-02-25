import { sendAccountData } from "@/app/acrions/sendAccountData";
import MyAccount from "@/component/Account/MyAccount/MyAccount";
import { MyFormData } from "@/component/Account/interfaces";

export default function MyData({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // const handleSubmit = async (formData: MyFormData) => {
  //   try {
  //     await sendAccountData(formData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      {/* {locale} */}
      <MyAccount></MyAccount>
    </>
  );
}
