"use client";
import React, { FormEvent, useEffect } from "react";
import { MyAccountProps, MyFormData } from "../interfaces";
import SidebarMobile from "../Sidebar/SidebarMobile/SidebarMobile";
import SidebarDesktop from "../Sidebar/SidebarDesktop/SidebarDesktop";
import "./MyAccount.scss";
import Sidebar from "../Sidebar/SidebarMobile/SidebarMobile";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAccountData } from "@/app/acrions/getAcсountData";

const MyAccount: React.FC<MyAccountProps> = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm<MyFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      city: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAccountData();
        setValue("firstName", response.data.firstName);
        setValue("lastName", response.data.lastName);
        setValue("phoneNumber", response.data.phoneNumber);
        setValue("email", response.data.email);
        setValue("city", response.data.city);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setValue]);

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data.firstName);
    reset();
  };

  return (
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
            <div className="client-form-item">
              <label className="client-form-label">Ім’я</label>
              <input
                {...register("firstName", {
                  required: "FirstName is require field",
                })}
                className="client-form-input"
                type="text"
                name="firstName"
                placeholder="Марія"
              />
            </div>

            <div className="client-form-item">
              <label className="client-form-label">Прізвище</label>
              <input
                {...register("lastName", {
                  required: "LastName is require field",
                })}
                className="client-form-input"
                type="text"
                name="lastName"
                placeholder="Коваленко"
              />
            </div>

            <div className="client-form-item">
              <label className="client-form-label">Номер телефону</label>
              <input
                {...register("phoneNumber", {
                  required: "PhoneNumber is require field",
                })}
                className="client-form-input"
                type="text"
                name="phoneNumber"
                placeholder="+38 (098) 000-00-00"
              />
            </div>

            <div className="client-form-item">
              <label className="client-form-label">Email</label>
              <input
                {...register("email", { required: "Email is require field" })}
                className="client-form-input"
                placeholder="mariiakovalenko@gmail.com  "
              />
            </div>

            <div className="client-form-item">
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

            <div className="client-password-form">
              <label className="client-password-label">Новий пароль</label>
              <input
                className="client-password-input"
                type="password"
                name="newPassword"
              />
            </div>

            <div className="client-password-form">
              <label className="client-password-label">Повторіть пароль</label>
              <input
                className="client-password-input"
                type="password"
                name="confirmPassword"
              />
            </div>
          </div>

          <button className="client-submit-button" type="submit">
            ЗБЕРЕГТИ
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
