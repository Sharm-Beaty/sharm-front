import React, { useEffect, useRef, useState, MutableRefObject, FunctionComponent } from "react";
import styles from "./CallBookingComponent.module.scss";
import InputPhoneWithMask from "@/component/Header/UI/InputPhoneWithMask/InputPhoneWithMask";
import { validatePhoneNumber } from "@/utils/masks";
import { gsap } from "gsap";
import {useTranslations} from "use-intl";

type Time = {
    from: string;
    to: string;
};

type CallBookingComponentProps = {
    time: Time;
    modalRef?: MutableRefObject<HTMLDivElement | null>;
    onChange?: (value: string) => string | null;
    value?: string;
    mask?: string;
    char?: string;
    modalControl: () => void;
    validation: { isValid: boolean; setIsValid: React.Dispatch<React.SetStateAction<boolean>> };
};

type ScheduleTextProps = {
    time: Time;
    translation: { from: string, to: string, daily: string };
};

const ScheduleText: FunctionComponent<ScheduleTextProps> = ({ time, translation }: ScheduleTextProps) => (
    <div className={styles["schedule-text"]}>
        <span>{translation.daily}</span>
        <span>
            {translation.from} {time?.from} {translation.to} {time?.to}
        </span>
    </div>
);

type BookButtonProps = {
    children: string;
    onClick: () => void;
};

const BookButton: FunctionComponent<BookButtonProps> = ({ children, onClick }: BookButtonProps) => (
    <button onClick={onClick} className={styles["book-button"]}>
        {children}
    </button>
);

const CallBookingComponent: FunctionComponent<CallBookingComponentProps> = ({
                                                                                time,
                                                                                mask = "",
                                                                                char = "_",
                                                                                modalControl,
                                                                                modalRef,
                                                                                validation: { isValid, setIsValid },
                                                                            }: CallBookingComponentProps) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const callBookingWrapper = useRef<HTMLDivElement>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const t = useTranslations('callBookingComponent');
    useEffect(() => {
        if (callBookingWrapper) {
            gsap.from(callBookingWrapper.current, {
                opacity: 0,
                y: 20,
                duration: 0.4,
                delay: 0.4,
            });
        }
    }, [callBookingWrapper]);

    const hideModalWindow = () => {
        if (modalRef?.current) {
            gsap.fromTo(
                modalRef?.current,
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    opacity: 0,
                    y: 100,
                    duration: 0.4,
                }
            );
        }
        setTimeout(() => {
            setTimeout(() => {
                modalControl();
            }, 400);
        });
    };

    const validateAndCloseModal = () => {
        const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

        setIsValid(isPhoneNumberValid);

        if (isPhoneNumberValid) {
            const result = {
                phoneNumber: phoneNumber,
                time: selectedTime
            };
            console.log(result); // send request with client number
            hideModalWindow();
        }
    };

    if (!time) {
        time = {
            from: "08:00",
            to: "20:00",
        };
    }
    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(event.target.value);
    };
    return (
        <div ref={callBookingWrapper} className={styles["call-booking-wrapper"]}>
            <ScheduleText translation={{
                from:t('from'),
                to: t('to'),
                daily:t('daily')
            }} time={time} />

            <div className={styles["input-wrapper"]}>
                <InputPhoneWithMask
                    value={phoneNumber}
                    className={styles["phone-number"]}
                    mask={mask}
                    char={char}
                    onChangeHandler={setPhoneNumber}
                />
                <input
                    onChange={handleTimeChange}
                    type="time"
                    className="convenient-time" />
            </div>

            <div className={styles["error-message-container"]}>
                {!isValid && <span className={styles["error-message"]}>{t('error-message')}</span>}
            </div>

            <BookButton onClick={validateAndCloseModal}>{t('book-call-button')}</BookButton>
        </div>
    );
};

export default CallBookingComponent;
