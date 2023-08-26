import styles from './Slider.module.scss';
import { FC } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import PrevBtn from './PrevBtn/PrevBtn';
import NextBtn from './NextBtn/NextBtn';


const breakpoints = {
    1500: { slidesPerView: 5 },
    1400: { slidesPerView: 4, spaceBetween: 10 },
    1340: { slidesPerView: 3.5, spaceBetween: 10 },
    1170: { slidesPerView: 3.2, spaceBetween: 10 },
    1020: { slidesPerView: 2.7, spaceBetween: 5 },
    880: { slidesPerView: 2.5, spaceBetween: 5 },
    780: { slidesPerView: 2.2, spaceBetween: 5 },
    700: { slidesPerView: 2 },
    620: { slidesPerView: 1.7 },
    530: { slidesPerView: 1.5 },
    400: { slidesPerView: 1.3 },
}


const Slider: FC<{ slides: any }> = ({ slides }) => {

    return (

        <div className={styles.main}>

            <Swiper
                className={styles.main__swiper}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                breakpoints={breakpoints}
                freeMode
                grabCursor={true}
                watchSlidesProgress
            >
                {slides.map((slide: any) => (
                    <SwiperSlide key={slide.price}>
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>

            <span slot="container-end" className={styles.sliderNavigation}>

                <PrevBtn />
                <NextBtn />

            </span>

        </div>
    )
};

export default Slider;
