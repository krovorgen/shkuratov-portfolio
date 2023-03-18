import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { companyData } from '../../../data/companyData';

import 'swiper/css';
import styles from './Company.module.scss';

export const Company = () => {
  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        speed={1500}
        spaceBetween={112}
        slidesPerView="auto"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1200: {
            spaceBetween: 112,
          },
          992: {
            spaceBetween: 92,
          },
          768: {
            spaceBetween: 72,
          },
          576: {
            spaceBetween: 54,
          },
          320: {
            spaceBetween: 32,
          },
        }}
        modules={[Autoplay]}
      >
        {companyData.map((el, index) => (
          <SwiperSlide key={`${index} ${Math.random()}`} className={styles.slide}>
            <div className={styles.container}>
              <img
                className={styles.logo}
                src={`./images/company/${el.imgUrl}`}
                width={el.widthImg}
                height={el.heightImg}
                alt={el.imgUrl.slice(0, el.imgUrl.indexOf('.'))}
              />
            </div>
          </SwiperSlide>
        ))}
        {companyData.map((el, index) => (
          <SwiperSlide key={`${index} ${Math.random()}`} className={styles.slide}>
            <div className={styles.container}>
              <img
                className={styles.logo}
                src={`./images/company/${el.imgUrl}`}
                width={el.widthImg}
                height={el.heightImg}
                alt={el.imgUrl.slice(0, el.imgUrl.indexOf('.'))}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
