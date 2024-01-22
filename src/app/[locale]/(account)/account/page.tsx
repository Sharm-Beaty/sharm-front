"use client";
import { sendAccountData } from "@/app/acrions/sendAccountData";
import MyAccount from "@/component/Account/MyAccount/MyAccount";
import { MyFormData } from "@/component/Account/interfaces";

export default function Account() {
  const handleSubmit = async (formData: MyFormData) => {
    try {
      await sendAccountData(formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <MyAccount onSubmit={handleSubmit}></MyAccount>
    </div>
  );
}
