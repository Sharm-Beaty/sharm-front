/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import { data } from "./mockData";
import Link from "next/link";

export const Banner = () => {
    return (
        <section className="banner">
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
                autoplay
                loop
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={10}
            >
                {data.map((info) => (
                    <SwiperSlide key={info.desktopSrc}>
                        <Link href={`/${info.url}`}>
                            <img
                                className="banner__bg desktop-only"
                                src={info.desktopSrc}
                                alt="Background photo"
                            />
                            <img
                                className="banner__bg mobile-only"
                                src={info.mobileSrc || info.desktopSrc}
                                alt="Background photo"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
