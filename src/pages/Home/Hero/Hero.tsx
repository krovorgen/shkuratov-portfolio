import React, { FC } from 'react';

import { heroData } from '../../../data/heroData';

import styles from './Hero.module.scss';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          <span>UX/UI designer</span>. Помогаю бизнесу в&nbsp;диджитале. Делаю <span>дизайн сайтов, приложений</span> и
          сложных <span>сервисов.</span>
        </h1>
        <ul className={styles.items}>
          {heroData.map((item, index) => (
            <li className={styles.item} key={index}>
              <p className={styles.statistics}>{item.statistics}</p>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
