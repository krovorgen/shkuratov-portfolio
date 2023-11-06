import React, { FC } from 'react';

import company1 from '../../../images/Companies/1.svg';
import company2 from '../../../images/Companies/2.svg';
import company3 from '../../../images/Companies/3.png';
import company4 from '../../../images/Companies/4.svg';
import company5 from '../../../images/Companies/5.svg';
import company6 from '../../../images/Companies/6.png';
import company7 from '../../../images/Companies/7.png';
import company8 from '../../../images/Companies/8.svg';
import company9 from '../../../images/Companies/9.png';
import company10 from '../../../images/Companies/10.svg';

import styles from './Companies.module.scss';

type Props = {};

export const Companies: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>
          Сотрудничал с более, чем <mark>30 крупными компаниями</mark> по всему миру
        </h2>
        <ul className={styles.elements}>
          <li className={styles.element}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company1} alt="company1" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company2} alt="company2" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company3} alt="company3" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company4} alt="company4" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company5} alt="company5" />
                </div>
              </li>
            </ul>
          </li>
          <li className={styles.element}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company6} alt="company6" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company7} alt="company7" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company8} alt="company8" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company9} alt="company9" />
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.img}>
                  <img src={company10} alt="company10" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
