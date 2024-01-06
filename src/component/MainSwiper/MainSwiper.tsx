"use client"
import React, {useEffect, useRef, useState} from 'react';
import "./MainSwiper.scss";
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";
import { PanInfo } from 'framer-motion';
import {useResizeObserver} from "@/hooks/useResizeObserver";
import {MocMainSwiper} from "@/mock/MainSwiper";

const MainSwiper = () => {
    const [current, setCurrent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const length = MocMainSwiper.length;
    const ref = useRef(null);
    const isMobile = useResizeObserver(ref)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    const handleDragEnd = (
        event: any,
        info: PanInfo
    ) => {
        if (info.offset.x > 100) {
            prevSlide();
        } else if (info.offset.x < -100) {
            nextSlide();
        }
    };


    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                if (!isHovering) {
                    nextSlide();
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [current, isHovering, isMobile]);

    return (
        <>
            <div
                ref={ref}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="container-swiper">
                {MocMainSwiper.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`wrapper-swiper`}
                        drag="x"
                        dragConstraints={{left: 0, right: 0}}
                        onDragEnd={handleDragEnd}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: index === current ? 1 : 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            type: "spring",
                            stiffness: 50,
                        }}
                    >
                        <Link href={item.buttonLink}>
                            <Image src={item.img} alt={item.name} fill/>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div className="wrapper-circle">
                {MocMainSwiper.map((item, index) => (
                    <motion.div
                        key={item.id}
                        onClick={() => goToSlide(index)}
                        whileHover={{
                            scale: 1.3,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14" height="14"
                            viewBox="0 0 14 14"
                            fill={index === current ? "#828282" : "none"}
                        >
                            <circle cx="7" cy="7" r="6.75" stroke="#828282" stroke-width="0.5"/>
                        </svg>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default MainSwiper;
