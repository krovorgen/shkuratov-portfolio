import React, { FC, useEffect } from 'react';
import styles from './Carousel.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const imagesFirst: string[] = [
    './images/Carousel/1.png', './images/Carousel/2.png', './images/Carousel/3.png',
    './images/Carousel/1.png', './images/Carousel/2.png', './images/Carousel/3.png',
    './images/Carousel/1.png', './images/Carousel/2.png', './images/Carousel/3.png',

];
const imagesSecond: string[] = [
  './images/Carousel/4.png',
  './images/Carousel/5.png',
  './images/Carousel/6.png',
  './images/Carousel/7.png',
    './images/Carousel/4.png',
  './images/Carousel/5.png',
  './images/Carousel/6.png',
  './images/Carousel/7.png',
    './images/Carousel/4.png',

];
const imagesThird: string[] = [
  './images/Carousel/8.png',
  './images/Carousel/9.png',
  './images/Carousel/10.png',
  './images/Carousel/11.png',
    './images/Carousel/8.png',
  './images/Carousel/9.png',
  './images/Carousel/10.png',
  './images/Carousel/11.png',
    './images/Carousel/8.png',

];
const imagesFourth: string[] = [
    './images/Carousel/12.png', './images/Carousel/13.png', './images/Carousel/14.png',
    './images/Carousel/12.png', './images/Carousel/13.png', './images/Carousel/14.png',
    './images/Carousel/12.png', './images/Carousel/13.png', './images/Carousel/14.png',

];

export const Carousel: FC = () => {
  const sliderAttr = { 'data-attr': 'slider' };
  const el = React.useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    el.current!.querySelectorAll<HTMLElement>('[data-attr="slider"]').forEach((section, index) => {
      const w = section.querySelector<HTMLElement>('ul')!;
      const [x, xEnd] = index % 2 ? ['20%', (w.scrollWidth - section.offsetWidth) * -0.2] : [w.scrollWidth * -0.2, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
            speed:1000,
          scrollTrigger: {
            trigger: section!,
            scrub: .5,
          },
        }
      );
    });
  }, []);
  return (
    <div className={styles.scrollWrap} ref={el}>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesFirst.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="534" height="300" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesSecond.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="534" height="300" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesThird.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="534" height="300" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div {...sliderAttr}>
        <ul className={styles.scrollRow}>
          {imagesFourth.map((item, index) => (
            <li key={index + 1} className={styles.scrollItem}>
              <img src={item} width="534" height="300" alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
