import React from 'react';

import styles from './PremiumKeys.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { AppRoutes } from '../../data/routes';
import imgMobile from '../../images/premium-keys/bg-mobile.png';

export const PremiumKeys = () => {
  return (
    <>
      <span id="keys" style={{ position: 'relative', top: -90 }} />
      <section className={styles.section}>
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
