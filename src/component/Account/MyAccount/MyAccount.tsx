"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import { getUserData } from "@/app/acrions/getUserData";
import { updateUserData } from "@/app/acrions/updateUserData";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import { MyAccountProps, MyFormData } from "../interfaces";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import "./MyAccount.scss";

const MyAccount: React.FC<MyAccountProps> = () => {
  const userId = "";
  const pathname = usePathname();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const {
    formState: { errors },
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
    watch,
  } = useForm<MyFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      city: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
        if (response && response.data) {
          const { firstName, lastName, phoneNumber, email, city } =
            response.data;
          setValue("firstName", firstName);
          setValue("lastName", lastName);
          setValue("phoneNumber", phoneNumber);
          setValue("email", email);
          setValue("city", city);
        }
      } catch (error) {
        console.log("Error fetching account data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const onSubmit: SubmitHandler<MyFormData> = async (data) => {
    try {
      const response = await updateUserData(data);
      if (response) {
        console.log("Data successfully updated");
      } else {
        throw new Error("HTTP Error! status" + response);
      }
    } catch (error) {
      console.log("There was a problem with the fetch operation");
    }
    reset();
  };

  return (
    <>
      {!isMobile && <Breadcrumbs path={pathname} />}
      <div className="client-account-section">
        {isMobile ? (
          <SidebarMobile initialMenuItem="Мої дані" />
        ) : (
          <SidebarDesktop />
        )}
        <div className="client-profile">
          <h2 className="client-title">Мій профіль</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="client-form">
              <div
                className={`client-form-item ${
                  errors.firstName ? "error" : ""
                }`}
              >
                <label className="client-form-label">Ім’я</label>
                <input
                  {...register("firstName", {
                    required: "FirstName is require field",
                    maxLength: 255,
                  })}
                  className="client-form-input"
                  type="text"
                  name="firstName"
                  placeholder="Марія"
                />
              </div>

              <div
                className={`client-form-item ${errors.lastName ? "error" : ""}`}
              >
                <label className="client-form-label">Прізвище</label>
                <input
                  {...register("lastName", {
                    required: "LastName is require field",
                    maxLength: 255,
                  })}
                  className="client-form-input"
                  type="text"
                  name="lastName"
                  placeholder="Коваленко"
                />
              </div>

              <div
                className={`client-form-item ${
                  errors.phoneNumber ? "error" : ""
                }`}
              >
                <label className="client-form-label">Номер телефону</label>
                <input
                  {...register("phoneNumber", {
                    required: "PhoneNumber is require field",
                    maxLength: 10,
                  })}
                  className="client-form-input"
                  type="text"
                  name="phoneNumber"
                  placeholder="+38 (098) 000-00-00"
                />
              </div>

              <div
                className={`client-form-item ${errors.email ? "error" : ""}`}
              >
                <label className="client-form-label">Email</label>
                <input
                  {...register("email", {
                    required: "Email is require field",
                    maxLength: 255,
                  })}
                  className="client-form-input"
                  placeholder="mariiakovalenko@gmail.com  "
                />
              </div>

              <div className={`client-form-item ${errors.city ? "error" : ""}`}>
                <label className="client-form-label">Місто</label>
                <input
                  {...register("city", {
                    required: "Місто є обовʼязковим полем",
                  })}
                  className="client-form-input"
                  type="text"
                  name="city"
                  placeholder="Київ"
                />
              </div>
            </div>

            <div className="client-password-section">
              <h3 className="password-change-title">Змінити пароль</h3>
              <p className="password-length-hint">
                Пароль повинен бути не менше 8 символів{" "}
              </p>

              <div
                className={`client-password-form ${
                  errors.newPassword ? "error" : ""
                }`}
              >
                <label className="client-password-label">Новий пароль</label>
                <input
                  {...register("newPassword", {
                    maxLength: 128,
                  })}
                  className="client-password-input"
                  type="password"
                  name="newPassword"
                />
                {errors.newPassword && (
                  <p className="error-message">{errors.newPassword.message}</p>
                )}
              </div>

              <div
                className={`client-password-form ${
                  errors.confirmPassword ? "error" : ""
                }`}
              >
                <label className="client-password-label">
                  Повторіть пароль
                </label>
                <input
                  {...register("confirmPassword", {
                    maxLength: 128,
                    validate: (value) =>
                      value === newPassword || "Паролі не співпадають",
                  })}
                  className="client-password-input"
                  type="password"
                  name="confirmPassword"
                />
              </div>
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button className="client-submit-button" type="submit">
              ЗБЕРЕГТИ
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
