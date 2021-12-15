import React from 'react';

import { companyLinkData } from '../../../data/companyLinkData';

import styles from './Company.module.scss';

export const Company = () => {
  return (
    <div className={styles.root}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.info}>
          <div className={styles.images}>
            <img src="./images/company.png" alt="Шкуратов Евгений" />
          </div>
          <p className={styles.text}>
            Каждый интерфейс это <mark>бесценный опыт,</mark> который накапливается от&nbsp;проекта к&nbsp;проекту
          </p>
        </div>
        <ul className={styles.links}>
          {companyLinkData.map((item, index) => (
            <li className={styles.link} key={index}>
              <a href={`https://${item.href}`} target="_blank" rel="noopener noreferrer">
                {item.href}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
