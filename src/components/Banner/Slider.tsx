/* eslint-disable @next/next/no-img-element */
"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Loader } from "../UI/Loader";
import "./Slider.scss";

type Slider = {
    children: React.ReactElement[];
    autoplay?: boolean;
};

const Slider = ({ children, autoplay }: Slider) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <Swiper
            pagination={{ clickable: true }}
            effect="coverflow"
            breakpoints={{
                0: {
                    autoplay: false,
                },
                768: {
                    autoplay: {
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                },
            }}
            speed={1000}
            autoplay={autoplay}
            loop
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
        >
            {children.map((data, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                    {loading ? <Loader /> : data}
                    {!loading && <Loader className="swiper-lazy-preloader"></Loader>}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
