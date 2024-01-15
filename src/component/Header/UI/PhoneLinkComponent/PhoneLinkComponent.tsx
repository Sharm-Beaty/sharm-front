import React, {useRef, useState} from "react";
import styles from "./PhoneLink.module.scss";
import {Phone} from "@/component/svg";
import {motion} from "framer-motion";
import {useTranslations} from "use-intl";
import ModalWindow from "@/component/UI/ModalWindow/ModalWindow";
import useModal from "@/hooks/useModal";
import CallBookingComponent from "../CallBookingComponent/CallBookingComponent";

const modalVariants = {
    hidden: {opacity: 0, x: '-100vh'},
    visible: {opacity: 1, x: 0, transition : {duration: 0.4}},
    exit: {opacity: 0, y: '100vh'}
};

const PhoneLinkComponent = () => {
    const [isValid, setIsValid] = useState(true);
    const t = useTranslations("phoneLinkComponent");
    const {isVisible, toggle} = useModal();
    const modalRef = useRef<HTMLDivElement>(null);
    const openModalWindow = () => {
        setIsValid(true);
        toggle();
    }
    return (
        <div className={`${styles["phone-link-wrapper"]}`}>
            <a
                href="tel:+380123456789"
                className={`${styles["phone-top-bar"]} ${styles["active-link"]}`}
            >
                <Phone/>
                <span> [0800 50 51 13]</span>
            </a>
            <motion.button
                whileTap={{
                    scale: 0.9,
                }}
                transition={{
                    duration: 0.1,
                }}
                className={styles["get-call"]}
            >
        <span
            onClick={openModalWindow}
            dangerouslySetInnerHTML={{__html: t.raw("request_call")}}
        />
            </motion.button>
            <ModalWindow
                ref={modalRef}
                className={styles['modal-styles']}
                isVisible={isVisible}
                onClose={toggle}
                padding="0.5rem 0.5rem"
            >
                <CallBookingComponent
                    modalRef={modalRef}
                    validation={{isValid, setIsValid}}
                    time={{from: "08:00", to: "20:00"}}
                    mask={"+38 (___) ___-__-__"} // required
                    char={'_'}
                    modalControl={toggle}
                />
            </ModalWindow>
        </div>
    );
};
export default PhoneLinkComponent;
