import React, { FC } from 'react';

import styles from './Keys.module.scss';
import { Label } from '../Label/Label';
import keys1 from '../../../images/Keys/1.png';
import keys2 from '../../../images/Keys/2.png';
import keys3 from '../../../images/Keys/3.png';
import keys4 from '../../../images/Keys/4.png';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../data/routes';

type Props = {};

export const Keys: FC<Props> = () => {
  return (
    <div className={styles.root} id="keys">
      <div className="container">
        <Label className={styles.label} iconColor="white" center>
          Портфолио
        </Label>
        <h2 className={styles.title}>Решение бизнес задач c&nbsp;фокусом на результат</h2>
        <div className={styles.inner}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src={keys1} alt="keys1" />
            </div>
            <Link to={AppRoutes.ivr} className={styles.ghostLink} />
            <div className={cn(styles.body, styles.bodyWithSvg)}>
              <h3 className={styles.subtitle}>
                IVR. Сервис <mark>автоматических обзвонов</mark>
              </h3>
              <svg width="34" height="35" fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.887 12.038a.9.9 0 0 0 .771.897l.122.009 7.82.054-9.935 9.935a.9.9 0 0 0 1.188 1.348l.085-.075 9.935-9.935.055 7.82a.9.9 0 0 0 .784.886l.122.008a.9.9 0 0 0 .886-.784l.008-.123-.071-9.97a.9.9 0 0 0-.773-.884l-.12-.01-9.97-.07a.9.9 0 0 0-.907.894z"
                  fill="#98989D"
                />
              </svg>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.box}>
              <div className={styles.img}>
                <img src={keys2} alt="keys2" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.subtitle}>
                  finaid. Инновационная <mark>партнёрская сеть</mark>
                </h3>
                <p className={styles.developing}>в разработке..</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.img}>
                <img src={keys3} alt="keys3" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.subtitle}>
                  StarLine. Установка <mark>охранных систем</mark>
                </h3>
                <p className={styles.developing}>в разработке..</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src={keys4} alt="keys4" />
            </div>
            <div className={styles.body}>
              <h3 className={styles.subtitle}>
                Инфоурок. <mark>Образовательная платформа №1</mark> по популярности в России
              </h3>
              <p className={styles.developing}>в разработке..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
