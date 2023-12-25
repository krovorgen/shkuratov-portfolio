import React, { FC } from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SliderImgContent.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import cn from 'classnames';

type Props = {
  addClass: string;
  contentImgUrl: string[];
  modifier: string;
};

export const SliderImgContent: FC<Props> = ({ addClass, contentImgUrl, modifier }) => {
  return (
    <section className={cn(styles.section, addClass)}>
      <Swiper
        className={styles.swiper}
        spaceBetween={112}
        slidesPerView={1}
        loop={true}
        effect="fade"
        navigation={{
          nextEl: `#btn-next-${modifier}`,
          prevEl: `#btn-prev-${modifier}`,
        }}
        modules={[Navigation, EffectFade]}
      >
        {contentImgUrl.map((url, index) => (
          <SwiperSlide key={`${index} ${Math.random()}`} className={styles.slide}>
            <div className={styles.container}>
              <img className={styles.img} src={url} alt="Картинка" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.nav}>
        <button className={cn(styles.btn, styles.btnPrev)} id={`btn-prev-${modifier}`}>
          <svg width="9" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.012 7.5 6.077 6.077a.833.833 0 1 1-1.178 1.179L.244 8.089a.833.833 0 0 1 0-1.178L6.911.244a.833.833 0 0 1 1.178 1.179L2.012 7.5z" />
          </svg>
        </button>
        <button className={cn(styles.btn, styles.btnNext)} id={`btn-next-${modifier}`}>
          <svg width="9" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.988 7.5.911 13.577a.833.833 0 1 0 1.178 1.179l6.667-6.667a.833.833 0 0 0 0-1.178L2.089.244A.833.833 0 0 0 .911 1.423L6.988 7.5z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
