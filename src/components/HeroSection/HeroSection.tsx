import React, { FC, memo } from 'react';
import cn from 'classnames';

import styles from './HeroSection.module.scss';

export type HeroSectionData = {
  date?: string;
  title?: string;
  goal?: string;
};

interface IHeroSectionProps {
  page?: 'about' | 'dinamo' | 'itec' | 'bomba';
  data: HeroSectionData;
}

export const HeroSection: FC<IHeroSectionProps> = memo(({ data, page }) => {
  const appearances = {
    [styles.dinamoPage]: page === 'dinamo',
    [styles.itecPage]: page === 'itec',
    [styles.bombaPage]: page === 'bomba',
  };
  return (
    <section className={cn(styles.root, appearances)}>
      <div className="container">
        <time className={styles.date}>{data.date}</time>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.goal}>
          <mark>Цель: </mark>
          {data.goal}
        </p>
      </div>
    </section>
  );
});
