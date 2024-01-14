import styles from "./CallBookingComponent.module.scss";
import React, {FC, useEffect, useRef, useState} from "react";
import InputPhoneWithMask from "@/component/Header/UI/InputPhoneWithMask/InputPhoneWithMask";
import {validatePhoneNumber} from "@/utils/masks";
import {gsap} from "gsap"


type CallBookingComponentProps = {
    time: {
        from: string;
        to: string;
    };
    children?: React.ReactNode;
    onChange?: (value: string) => string | null;
    value?: string;
    mask?: string;
    char?: string;
    modalControl: any
};

const ScheduleText = ({time}: { time: { from: string; to: string } }) => (
    <div
        className={styles["schedule-text"]}
    >
        <span>Щоденно</span>
        <span>
     з {time?.from} до {time?.to}
    </span>
    </div>
);


const BookButton: FC<{ children: string, onClick: (phoneNumber: string) => void, phoneNumber: string }> = ({
                                                                                                               children,
                                                                                                               onClick,
                                                                                                               phoneNumber
                                                                                                           }) => {
    return <button onClick={() => onClick(phoneNumber)} className={styles["book-button"]}>{children}</button>;
};

const CallBookingComponent: FC<CallBookingComponentProps> = ({
                                                                 time,
                                                                 mask = '',
                                                                 char = '_',
                                                                 modalControl
                                                             }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValid, setIsValid] = useState(true);
    let callBookingWrapper = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (callBookingWrapper) {
            gsap.from(callBookingWrapper.current, {
                opacity: 0,
                y: 20,
                duration: 0.4,
                delay: 0.4,
            });
        }
    }, []);
    const bookButtonHandler = (phoneNumber: string) => {
        const valid = validatePhoneNumber(phoneNumber);


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
        <div ref={callBookingWrapper} className={styles["call-booking-wrapper"]}>
            <ScheduleText time={time}></ScheduleText>
            <div
                className={styles["input-wrapper"]}>
                <InputPhoneWithMask
                    value={phoneNumber}
                    className={styles['phone-number']}
                    mask={mask}
                    char={char}
                    onChangeHandler={setPhoneNumber}
                />
                <input
                    type='time'
                    className="convenient-time"/>
            </div>

            <div className={styles["error-message-container"]}>
                {!isValid && <span className={styles['error-message']}>Не корректний формат телефону!</span>}
            </div>
            <BookButton
                phoneNumber={phoneNumber}
                onClick={() => bookButtonHandler(phoneNumber)}
            >
                замовити дзвінок
            </BookButton>
        </div>
    );
};

export default CallBookingComponent;
