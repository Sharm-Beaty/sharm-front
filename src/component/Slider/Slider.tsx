"use client";
import {useState, useEffect, useRef, ReactElement} from "react";
import "./Slider.scss";
import {useStateRef, getRefValue} from "../../hooks/useStateRef";
import {Elipse} from "../svg";
import {getTouchEventData} from "../../types/dom";

interface Slider {
    children?: ReactElement[];
    data: {title: string; url: string}[];
}

export const Slider = ({children, data}: Slider) => {
    const widthRef = useRef<HTMLDivElement>(null);
    const minOffsetXRef = useRef(0);
    const currentOffsetXRef = useRef(0);
    const startXRef = useRef(0);
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [currentIndex, setCurrentIndex, currentIndexRef] = useStateRef(0);
    const [isSwiping, setIsSwiping] = useState(false);

    useEffect(() => {
        setScreenWidth(getRefValue(widthRef).clientWidth);
        const intervalId = setInterval(() => {
            if (screenWidth !== getRefValue(widthRef).clientWidth) {
                console.log("has?");
                setScreenWidth(getRefValue(widthRef).clientWidth);
                setOffsetX(
                    getRefValue(widthRef).clientWidth *
                        -getRefValue(currentIndexRef)
                );
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [screenWidth]); // eslint-disable-line

    const onTouchStart = (
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        setIsSwiping(true);
        currentOffsetXRef.current = getRefValue(offsetXRef);
        startXRef.current = getTouchEventData(e).clientX;

        const containerEl = getRefValue(widthRef);
        minOffsetXRef.current =
            containerEl.offsetWidth - containerEl.scrollWidth;

        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onTouchEnd);
        window.addEventListener("mousemove", onTouchMove);
        window.addEventListener("mouseup", onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent | MouseEvent) => {
        const currentX = getTouchEventData(e).clientX;
        const diff = getRefValue(startXRef) - currentX;
        let newOffsetX = getRefValue(currentOffsetXRef) - diff;
        const minOffsetX = getRefValue(minOffsetXRef);

        if (newOffsetX > 0) newOffsetX = 0;
        if (newOffsetX < minOffsetX) newOffsetX = minOffsetX;

        setOffsetX(newOffsetX);
    };

    const onTouchEnd = () => {
        setIsSwiping(false);
        let newOffsetX = getRefValue(offsetXRef);
        const diff = getRefValue(currentOffsetXRef) - newOffsetX;

        const condition =
            getRefValue(widthRef).clientWidth > 768
                ? Math.abs(diff) > 150
                : Math.abs(diff) > 100;

        if (condition) {
            if (diff > 0) {
                newOffsetX =
                    Math.floor(newOffsetX / getRefValue(widthRef).clientWidth) *
                    getRefValue(widthRef).clientWidth;
            } else {
                newOffsetX =
                    Math.ceil(newOffsetX / getRefValue(widthRef).clientWidth) *
                    getRefValue(widthRef).clientWidth;
            }
        } else {
            newOffsetX =
                Math.round(newOffsetX / getRefValue(widthRef).clientWidth) *
                getRefValue(widthRef).clientWidth;
        }

        setOffsetX(newOffsetX);
        setCurrentIndex(
            Math.abs(newOffsetX / getRefValue(widthRef).clientWidth)
        );

        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("mousemove", onTouchMove);
        window.removeEventListener("mousedown", onTouchEnd);
    };

    const sliderContainerStyles = () => ({
        height: "100%",
        display: "flex",
        width: screenWidth * data.length,
        transform: `translateX(${offsetX}px)`,
        transition: isSwiping ? "none" : "transform ease-in 0.3s",
    });

    const slideStyles = (slideIndex: number) => ({
        position: "relative" as "relative",
        width: `${screenWidth}px`,
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${data[slideIndex].url})`,
    });

    const goToSlide = (newIndex: number) => {
        setCurrentIndex(newIndex);
        setOffsetX(-newIndex * getRefValue(widthRef).clientWidth);
    };

    return (
        <>
            <div
                ref={widthRef}
                style={{
                    overflow: "hidden",
                    height: "100%",
                    touchAction: "pan-y",
                }}
            >
                <div
                    onMouseDown={onTouchStart}
                    onTouchStart={onTouchStart}
                    className="slider-container"
                    style={sliderContainerStyles()}
                >
                    {data.map(({title}, index) => {
                        return (
                            <div key={title} style={slideStyles(index)}>
                                {children &&
                                    children[index] &&
                                    screenWidth !== 0 && (
                                        <div className="slide-container">
                                            {children[index]}
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <ul className="slider-button-list">
                {data.map((data, index) => (
                    <li key={data.title}>
                        <button
                            className="slider-button"
                            onClick={() => goToSlide(index)}
                        >
                            <Elipse
                                fill={
                                    currentIndex === index
                                        ? `var(--color-text)`
                                        : "none"
                                }
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
