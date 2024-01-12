import styles from "./CallBookingComponent.module.scss";
import React, {FC, useState} from "react";
import InputPhoneWithMask from "@/component/Header/UI/InputPhoneWithMask/InputPhoneWithMask";
import {validatePhoneNumber} from "@/utils/masks";


type CallBookingComponentProps = {
    time: {
        from: string;
        to: string;
    };
    children?: React.ReactNode;
    onChange?: (value: string) => string | null;
    value?: string;
    mask?: string;
    modalControl: any
};

const ScheduleText = ({time}: { time: { from: string; to: string } }) => (
    <div className={styles["schedule-text"]}>
        <span>Щоденно</span>
        <span>
     з {time?.from} до {time?.to}
    </span>
    </div>
);


const BookButton: FC<{ children: string, onClick: (phoneNumber: string) => void, phoneNumber: string }> = ({children, onClick, phoneNumber }) => {
    return <button onClick={() => onClick(phoneNumber)} className={styles["book-button"]}>{children}</button>;
};

const CallBookingComponent: FC<CallBookingComponentProps> = ({
                                                                 time,
                                                                 mask = '',
                                                                 modalControl
                                                             }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValid, setIsValid] = useState(true);

    const bookButtonHandler = (phoneNumber: string) => {
        const valid = validatePhoneNumber(phoneNumber, mask);


        if (valid) {
            console.log(phoneNumber)  // send request with client number
            modalControl(false)
            setIsValid(valid);
        } else {
            setIsValid(valid);
        }

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
            <InputPhoneWithMask
                value={phoneNumber}
                className={styles['phone-number']}
                mask={mask}
                onChangeHandler={setPhoneNumber}
            />
            <div className={styles["error-message-container"]}>
                {!isValid && <span className={styles['error-message']}>Не корректний формат телефону!</span>}
            </div>
            <BookButton phoneNumber={phoneNumber} onClick={() => bookButtonHandler(phoneNumber)}>замовити дзвінок</BookButton>
        </div>
    );
};

export default CallBookingComponent;
