import React, { FC } from 'react';

import { heroData } from '../../data/heroData';

import styles from './style.module.scss';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Product digital <span>designer.</span> <br />
          Помогу <span>улучшить UX/CX</span> <br />
          Вашего <span>продукта</span> или услуги <br />
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
