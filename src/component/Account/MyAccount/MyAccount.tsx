"use client";
import React, { FormEvent, useEffect } from "react";
import { MyAccountProps, MyFormData } from "../interfaces";
import "./MyAccount.scss";
import Sidebar from "../Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAccountData } from "@/app/acrions/getAccountData";

const MyAccount: React.FC<MyAccountProps> = ({}) => {
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

  // const [formData, setFormData] = React.useState<MyFormData>({
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   email: "",
  //   city: "",
  //   newPassword: "",
  //   confirmPassword: "",
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   onSubmit(formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return (
    <div className="client-account-section">
      <Sidebar />
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
                // value={formData.firstName}
                placeholder="Марія"
                // onChange={handleChange}
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
                // value={formData.lastName}
                placeholder="Коваленко"
                // onChange={handleChange}
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
                // value={formData.phoneNumber}
                placeholder="+38 (098) 000-00-00"
                // onChange={handleChange}
              />
            </div>

            <div className="client-form-item">
              <label className="client-form-label">Email</label>
              <input
                {...register("email", { required: "Email is require field" })}
                className="client-form-input"
                // type="email"
                // name="email"
                // value={formData.email}
                placeholder="mariiakovalenko@gmail.com  "
                // onChange={handleChange}
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
                // value={formData.city}
                placeholder="Київ"
                // onChange={handleChange}
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
                // value={formData.newPassword}
                // onChange={handleChange}
              />
            </div>

            <div className="client-password-form">
              <label className="client-password-label">Повторіть пароль</label>
              <input
                className="client-password-input"
                type="password"
                name="confirmPassword"
                // value={formData.confirmPassword}
                // onChange={handleChange}
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
