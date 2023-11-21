"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Loader } from "../UI/Loader";
import Slider from "./Slider";
import { data } from "../../data/dataMainBanner";
import "./Banner.scss";

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section className="banner">
            <Slider autoplay>
                {data.map((info) => (
                    <Link href={`/${info.url}`} key={info.id}>
                        <Image
                            className="banner__bg"
                            width={300}
                            height={300}
                            quality={isMobile ? 75 : 100}
                            loading="lazy"
                            src={isMobile ? info.mobileSrc : info.desktopSrc}
                            alt={info.name}
                        />
                    </Link>
                ))}
            </Slider>
        </section>
    );
};
export default Banner;
