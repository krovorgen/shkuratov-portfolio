import React, { FC } from 'react';

import styles from './Keys.module.scss';
import { Label } from '../Label/Label';
import keys1 from '../../../images/Keys/1.png';
import keys2 from '../../../images/Keys/2.png';
import keys3 from '../../../images/Keys/3.png';
import keys4 from '../../../images/Keys/4.png';

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
              <img src={keys1} alt="keys1" loading="lazy" />
            </div>
            <div className={styles.body}>
              <h3 className={styles.subtitle}>
                IVR. Сервис <mark>автоматических обзвонов</mark>
              </h3>
              <p className={styles.developing}>в разработке..</p>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.box}>
              <div className={styles.img}>
                <img src={keys2} alt="keys2" loading="lazy" />
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
                <img src={keys3} alt="keys3" loading="lazy" />
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
              <img src={keys4} alt="keys4" loading="lazy" />
            </div>
            <div className={styles.body}>
              <h3 className={styles.subtitle}>
                Инфоурок. <mark>Образовательная платформа №1</mark> по&nbsp;популярности в России
              </h3>
              <p className={styles.developing}>в разработке..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
