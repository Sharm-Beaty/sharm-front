import styles from "./CallBookingComponent.module.scss";
import React, { FC, useState } from "react";

type PhoneNumberProps = {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  value?: string;
  phonenumber?: string;
};

type CallBookingComponentProps = {
  time: {
    from: string;
    to: string;
  };
  children?: React.ReactNode;
  phonenumber?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  maxLength: number;
};

const ScheduleText = ({ time }: { time: { from: string; to: string } }) => (
  <div className={styles["schedule-text"]}>
    <span>Schedule a call</span>
    <span>
      {time?.from} - {time?.to}
    </span>
  </div>
);

const PhoneNumber: FC<PhoneNumberProps> = ({
  onChange,
  maxLength,
  placeholder,
  phonenumber,
}): React.JSX.Element => {
  return (
    <input
      type="tel"
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      className={styles["phone-number"]}
      value={phonenumber}
    />
  );
};

const BookButton = ({ children }) => {
  return <button className={styles["book-button"]}>{children}</button>;
};

const CallBookingComponent: FC<CallBookingComponentProps> = ({
  time,
  maxLength,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const input = event.target.value.replace(/\D/g, "");
    const formattedInput = input
      .replace(/(\d{3})(\d{2})(\d{2})(\d{2})$/, "+38 ($1) $2-$3-$4")
      .substring(0, 19); // +38 (XXX) XX-XX-XXX has a max length of 19
    setPhoneNumber(formattedInput);
  };

  if (!time) {
    time = {
      from: "08:00",
      to: "20:00",
    };
  }

  return (
    <div className={styles["call-booking-wrapper"]}>
      <ScheduleText time={time}></ScheduleText>
      <PhoneNumber
        onChange={handlePhoneInputChange}
        value={phoneNumber}
        maxLength={19}
        placeholder="+38 (___) ___-__-__"
      ></PhoneNumber>
      <BookButton>Book now</BookButton>
    </div>
  );
};

export default CallBookingComponent;
