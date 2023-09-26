"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import bg from "public/baner.png";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className='banner'>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
      >
        <SwiperSlide>
          <Image
            className='banner__bg'
            src={bg}
            alt='lbaner'
          />
          <div className='banner__content'>
            <h2 className='banner__heading'>Найкращі пропозиції цього літа</h2>
            <button className='banner__button'>Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='banner__bg'
            src={bg}
            alt='lbaner'
          />
          <div className='banner__content'>
            <h2 className='banner__heading'>Трендові товари</h2>
            <button className='banner__button'>Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='banner__bg'
            src={bg}
            alt='lbaner'
          />
          <div className='banner__content'>
            <h2 className='banner__heading'>Трендові товари</h2>
            <button className='banner__button'>Explore</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
