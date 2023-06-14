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
        <section className=" " >
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
                    className="mySwiper  mb-28"
                >
                    <SwiperSlide >

                        <div className=" bgimg1">
                            <div className=" text-center lg:pt-44 pt-28 font-sans space-y-6">
                                <h1 className=" lg:text-4xl text-2xl font-bold text-stone-100 ">
                                    NEW CAMPING SEASON <br /> <span className=" text-green-500"> IS STARTING IN MAY!</span>


                                </h1>
                                <p className=" text-gray-100 lg:w-1/2 mx-auto">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <button class="border border-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-green-500 hover:text-white">
                                    Read more Us
                                </button>
                                <button class="border ms-8 border-orange-400 text-white 
                                font-semibold py-2 px-4 rounded hover:focus:outline-none hover:bg-orange-400 ">Views Timetable</button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" bgimg2">
                            <div className=" text-center lg:pt-44 pt-28 font-sans space-y-6">
                                <h1 className=" lg:text-4xl text-2xl font-bold text-stone-100 ">
                                    NEW CAMPING SEASON <br /> <span className=" text-green-500"> IS STARTING IN MAY!</span>


                                </h1>
                                <p className=" text-gray-100 lg:w-1/2 mx-auto">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <button class="border border-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-green-500 hover:text-white">
                                    Read more Us
                                </button>
                                <button class="border ms-8 border-orange-400 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-orange-400 hover:text-white">Views Timetable</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bgimg" >
                            <div className=" text-center lg:pt-44 pt-28 font-sans space-y-6">
                                <h1 className=" lg:text-4xl text-2xl font-bold text-stone-100 ">
                                    NEW CAMPING SEASON <br /> <span className=" text-green-500"> IS STARTING IN MAY!</span>


                                </h1>
                                <p className=" text-gray-100 lg:w-1/2 mx-auto">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <button class="border border-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-green-500 hover:text-white">
                                    Read more Us
                                </button>
                                <button class="border ms-8 border-orange-400 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-orange-400 hover:text-white">Views Timetable</button>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
        </section>
    );
};

export default Banner;