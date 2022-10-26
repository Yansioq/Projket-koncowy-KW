import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import './Carousel.scss'

export default function CarouselFunction() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>I can finally express myself without people judging me</SwiperSlide>
                <SwiperSlide>Great website for sharing beautiful things</SwiperSlide>
                <SwiperSlide>I am so glad that I can post without caring about likes</SwiperSlide>
                <SwiperSlide>I can find here amazing music, photos and even good book recommendations</SwiperSlide>
            </Swiper>
        </>
    );
}
