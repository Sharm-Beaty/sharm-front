"use client";
import {useState, useRef, ReactElement} from "react";

import {Arrow} from "../svg/Arrow";
import "./Accordion.scss";

interface Accordion {
    title: string;
    content: string | ReactElement[];
    footer?: boolean;
}

export const Accordion = ({title, content, footer}: Accordion) => {
    const [isActive, setIsActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [setRotate, setRotateState] = useState("");

    const ref = useRef<HTMLInputElement>(null);

    function toggleAccordion() {
        setIsActive(isActive === "" ? "active" : "");
        setHeight(
            isActive === "active" ? "0px" : `${ref.current?.scrollHeight}px`
        );
        setRotateState(
            isActive === "active" ? "arrow-svg" : "arrow-svg rotate"
        );
    }

    return (
        <div className="accordion__section">
            <button
                className={`accordion ${isActive}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{title}</p>
                <Arrow className={`${setRotate}`} />
            </button>
            <div
                ref={ref}
                style={{maxHeight: `${height}`}}
                className="accordion__content"
            >
                {footer ? (
                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom: "10px",
                        }}
                    >
                        {content}
                    </ul>
                ) : (
                    <div
                        className="accordion__text"
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                )}
            </div>
        </div>
    );
};
