import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Hero.module.scss';

export const Hero: FC = () => {
  return (
    <section className={cn(styles.root)}>
      <div className={styles.inner}>
        <div className="container">
          <time className={styles.date}>Июль 2022</time>
          <h1 className={styles.title}>Проектирование и&nbsp;дизайн сервиса голосовых роботов</h1>
          <p className={styles.goal}>
            <mark>Цель: </mark>
            спроектировать с&nbsp;нуля и&nbsp;разработать дизайн сложного сервиса IVR обзвонов
          </p>
        </div>
      </div>
    </section>
  );
};
