import PropTypes from 'prop-types';
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import './Slider.css'

import { useState } from 'react';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

const Slider = ({ slides }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='h-[400px] md:h-screen overlay-bg-color' >
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                // spaceBetween={0}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Autoplay, FreeMode, Thumbs]}
                className="mySwiper2 h-[400px] md:h-screen"
            >

                {
                    slides.map(slide => <div key={slide.id}>
                        <SwiperSlide>
                            <>
                                <img className='h-full w-full relative' src={slide.image} />
                                <div className="swiper-slide">
                                    <span className="swiper-no-swiping absolute -top-2/3 left-10 text-5xl">
                                        <div className='left-5 md:left-1/4 w-11/12 md:w-2/3'>
                                            <h2 className='text-3xl md:text-6xl font-bold text-white'>{slide.title}</h2>
                                            <p className='backdrop-blur-sm mt-2 md:mt-5 p-3 text-base md:text-lg font-bold text-white'>{slide.long_description}</p>
                                        </div>
                                    </span>
                                </div>
                            </>
                        </SwiperSlide>
                    </div>)
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Navigation, Pagination, Thumbs]}
                className="mySwiper w-40 md:w-60 bottom-12 md:bottom-20 backdrop-blur-3xl"
            >
                {
                    slides.map((slide) => <div key={slide.id}>
                        <SwiperSlide>
                            <img src={slide.image} />
                        </SwiperSlide>
                    </div>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;

Slider.propTypes = {
    slides: PropTypes.array,
}