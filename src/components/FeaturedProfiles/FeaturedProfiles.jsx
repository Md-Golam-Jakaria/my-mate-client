
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const FeaturedProfiles = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-4xl'>Featured Profiles</h1>
                <p className='text-lg pt-5 w-3/6 mx-auto'>Aenean at ligula massa. Donec ipsum elit, placenta sed duierrut dapibus semper turpin Fusce nec premium nuns.</p>
            </div>
            <div className='w-4/6  my-10 mx-auto'>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    Navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-5.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../src/assets/images/profile-5.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedProfiles;