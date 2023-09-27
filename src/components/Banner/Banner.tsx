/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import { data } from "./mockData";
import Link from "next/link";

export const Banner = () => {
  return (
    <section className='banner'>
      <Swiper
        pagination
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
      >
        {data.map((info) => (
          <SwiperSlide key={info.src}>
            <img
              className='banner__bg'
              src={info.src}
              alt='Image with beauty woman'
            />
            <div className='banner__content'>
              <h4 className='banner__heading'>{info.header}</h4>
              <Link
                href={`/${info.url}`}
                className='banner__button'
              >
                {info.btn}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
