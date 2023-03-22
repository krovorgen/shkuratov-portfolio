import React, { useEffect } from 'react';

import styles from './PremiumKeys.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { AppRoutes } from '../../data/routes';
import imgMobile from '../../images/premium-keys/bg-mobile.png';
import keys1img from '../../images/premium-keys/premim-preview-1.png';
import keys2img from '../../images/premium-keys/premim-preview-2.png';
import keys3img from '../../images/premium-keys/premim-preview-3.png';
import keys4img from '../../images/premium-keys/premim-preview-4.png';
import keys5img from '../../images/premium-keys/premim-preview-5.png';
import keys6img from '../../images/premium-keys/premim-preview-6.png';
import cn from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const PremiumKeys = () => {
  const sliderAttr = { 'data-attr': 'keys-slider' };
  const el = React.useRef<HTMLUListElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    el.current!.querySelectorAll<HTMLElement>('[data-attr="keys-slider"]').forEach((section, index) => {
      const [x, xEnd] = index % 2 ? ['0%', '-20%'] : ['-20%', '0%'];
      gsap.fromTo(
        section,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            scrub: 0.5,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <span id="keys" style={{ position: 'relative', top: -90 }} />
      <section className={styles.section}>
        <ul className={styles.elements} ref={el}>
          <li className={styles.element} {...sliderAttr}>
            <img className={styles.keys} width={494} height={241} src={keys1img} alt="Картинка" />
            <img className={styles.keys} width={494} height={241} src={keys2img} alt="Картинка" />
          </li>
          <li className={cn(styles.element, styles.elementSecond)} {...sliderAttr}>
            <img className={styles.keys} width={494} height={241} src={keys3img} alt="Картинка" />
            <img className={styles.keys} width={494} height={241} src={keys4img} alt="Картинка" />
          </li>
          <li className={styles.element} {...sliderAttr}>
            <img className={styles.keys} width={494} height={241} src={keys5img} alt="Картинка" />
            <img className={styles.keys} width={494} height={241} src={keys6img} alt="Картинка" />
          </li>
        </ul>
        <img className={styles.imgMobile} src={imgMobile} alt="Кейсы" />
        <div className="container">
          <div className={styles.wrap}>
            <h2 className={styles.title}>IVR. Сервис автоматических обзвонов</h2>
            <p className={styles.text}>
              Создания сценариев разговоров <strong>искусственного интеллекта</strong> с&nbsp;человеком по&nbsp;телефону
            </p>
            <NavLink className={styles.link} to={AppRoutes.ivr}>
              <Button appearances="accent" variant="span">
                Смотреть кейс
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
