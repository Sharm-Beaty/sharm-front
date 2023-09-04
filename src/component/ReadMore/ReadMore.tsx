"use client";
import {useState} from "react";
import "./ReadMore.scss";

export const ReadMore = ({content}: any) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <>
            <div
                className={isReadMore ? "" : "more-info-container"}
                dangerouslySetInnerHTML={{
                    __html: isReadMore ? content.slice(0, 585) : content,
                }}
            />
            <button onClick={toggleReadMore} className="read-more-button">
                {isReadMore ? "Розгорнути" : " Згорнути"}
            </button>
        </>
    );
};
