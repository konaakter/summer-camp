import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Banner.css'


const Banner = () => {

    return (
        <section>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper heg mb-28"
                >
                    <SwiperSlide >
                    <figure><img className=" w-full " 
                    src="https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?w=740&t=st=1686226687~exp=1686227287~hmac=cce0ab2e556c7becc7da46f4de3d353d1ce71328d3708e5497a8184c1a76603d " alt="" srcset="" /></figure>
                    </SwiperSlide>
                    <SwiperSlide><img className=" w-full " src=" https://img.freepik.com/free-photo/group-girls-camping-forest_1303-9509.jpg?w=740&t=st=1686227638~exp=1686228238~hmac=0fcae5327d37de8970dd55809bd947c6e50faf8611ffb9564d14cfe5d824a24c" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="" alt="" /></SwiperSlide>
                    
                </Swiper>
            </>
        </section>
    );
};

export default Banner;