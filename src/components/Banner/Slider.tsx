/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import { data } from "../../data/dataMainBanner";
import "./Slider.scss";

const isMobile = window.innerWidth < 768;

const Slider = () => {
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
            autoplay
            loop
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={10}
        >
            {data.map((info, ind) => (
                <SwiperSlide key={info.id} style={{ position: "relative" }}>
                    <Link href={`/${info.url}`}>
                        <Image
                            className="banner__bg"
                            width={300}
                            height={300}
                            priority={ind === 0}
                            src={isMobile ? info.mobileSrc || info.desktopSrc : info.desktopSrc}
                            alt={info.name}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
