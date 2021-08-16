import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const Keys: FC = () => {
  return (
    <section className={styles['keys']}>
      <div className="container">
        <ul className={styles['keys__items']}>
          <li className={`${styles['keys__item']} ${styles['keys__item--dinamo']}`}>
            <time className={styles['keys__date']}>Январь 2021</time>
            <h2 className={styles['keys__title']}>
              Национальный олимпийский <span>стадион-динамо</span>
            </h2>
            <div className={styles['keys__bottom']}>
              <NavLink className={styles['keys__link']} to={'/dinamo'}>
                Смотреть кейс
              </NavLink>
              <p className={styles['keys__reading']}>≈ 5-8 минут</p>
            </div>
          </li>
          <li className={`${styles['keys__item']} ${styles['keys__item--itec']}`}>
            <time className={styles['keys__date']}>Ноябрь 2020</time>
            <h2 className={styles['keys__title']}>
              <span>IT-курсы</span> для программистов
            </h2>
            <div className={styles['keys__bottom']}>
              <NavLink className={styles['keys__link']} to={'/itec'}>
                Смотреть кейс
              </NavLink>
              <p className={styles['keys__reading']}>≈ 4-7 минут</p>
            </div>
          </li>
          <li className={`${styles['keys__item']} ${styles['keys__item--bomba']}`}>
            <time className={styles['keys__date']}>Февраль 2021</time>
            <h2 className={styles['keys__title']}>
              Интернет-магазин <span>пиротехники</span>
            </h2>
            <div className={styles['keys__bottom']}>
              <NavLink className={styles['keys__link']} to={'/bomba'}>
                Смотреть кейс
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Keys;
