import React, { FC, useEffect } from 'react';
import styles from './Carousel.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import slide1 from '../../../images/carousel/1.png';
import slide2 from '../../../images/carousel/2.png';
import slide3 from '../../../images/carousel/3.png';
import slide4 from '../../../images/carousel/4.png';
import slide5 from '../../../images/carousel/5.png';
import slide6 from '../../../images/carousel/6.png';
import slide7 from '../../../images/carousel/7.png';
import slide8 from '../../../images/carousel/8.png';
import slide9 from '../../../images/carousel/9.png';
import slide10 from '../../../images/carousel/10.png';
import slide11 from '../../../images/carousel/11.png';
import slide12 from '../../../images/carousel/12.png';
import slide13 from '../../../images/carousel/13.png';
import slide14 from '../../../images/carousel/14.png';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../data/routes';

const imagesFirst: string[] = [slide1, slide2, slide3, slide1, slide2, slide3, slide1, slide2, slide3];
const imagesSecond: string[] = [slide4, slide5, slide6, slide7, slide4, slide5, slide6, slide7, slide4];
const imagesThird: string[] = [slide8, slide9, slide10, slide11, slide8, slide9, slide10, slide11, slide8];
const imagesFourth: string[] = [slide12, slide13, slide14, slide12, slide13, slide14, slide12, slide13, slide14];

export const Carousel: FC = () => {
  const sliderAttr = { 'data-attr': 'slider' };
  const el = React.useRef<HTMLAnchorElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    el.current!.querySelectorAll<HTMLElement>('[data-attr="slider"]').forEach((section, index) => {
      const ul = section.querySelector<HTMLElement>('ul')!;
      const [x, xEnd] = index % 2 ? ['20%', (ul.scrollWidth - section.offsetWidth) * -0.2] : [ul.scrollWidth * -0.2, 0];
      gsap.fromTo(
        ul,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section!,
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <NavLink className={styles.scrollWrap} ref={el} to={AppRoutes.keys}>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesFirst.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="311" height="175" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesSecond.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="311" height="175" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesThird.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="311" height="175" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesFourth.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="311" height="175" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
    </NavLink>
  );
};
