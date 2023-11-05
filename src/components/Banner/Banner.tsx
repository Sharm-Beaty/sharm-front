/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import { data } from "../../data/dataMainBanner";
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
                speed={1000}
                autoplay
                loop
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={10}
            >
                {data.map((info) => (
                    <SwiperSlide key={info.id}>
                        <Link href={`/${info.url}`}>
                            <img
                                className="banner__bg desktop-only"
                                src={info.desktopSrc}
                                alt={info.name}
                            />
                            <img
                                className="banner__bg mobile-only"
                                src={info.mobileSrc || info.desktopSrc}
                                alt={info.name}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
