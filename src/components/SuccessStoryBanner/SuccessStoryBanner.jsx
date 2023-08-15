import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import "./SuccessStoryBanner.css"



const SuccessStoryBanner = () => {

    return (
        <div className=" banner-background  text-white m-20  p-20 rounded-3xl">
            <div className="grid grid-cols-2 gap-20">
                <div>
                    <h1 className="text-4xl font-bold my-2" >We have thousands of success stories</h1>
                    <p className="text-xl" >Lorem ipsum dolor sit amet consectetur. Convallis id elit egoists aurice amet eu lactose Lucius intercom. Proin pellentesque vitae farer temper ultrices nulled</p>
                    <Link to='#' className="btn bg-gradient-to-b from-secoundary to-primary border-none text-white capitalize my-5">Get start now <FaArrowRight></FaArrowRight> </Link>
                </div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider4.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider5.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider6.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider3.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 2100,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider3.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider4.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider5.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../../src/assets/images/slider6.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default SuccessStoryBanner;