import React, { FC } from 'react';

import styles from './Stats.module.scss';
import cn from 'classnames';

export type StatsSectionData = {
  head: { title: string; text: JSX.Element | string }[];
  statistics?: { title: string; text: JSX.Element | string }[];
};

export type StatsProps = {
  data: StatsSectionData;
  addClass?: string;
};

export const Stats: FC<StatsProps> = ({ data, addClass }) => {
  return (
    <div className={cn(styles.root, addClass)}>
      <div className="container">
        <ul className={styles.items}>
          {data.head.map((el, index) => (
            <li className={styles.item} key={index}>
              <h4 className={styles.title}>{el.title}</h4>
              <p className={styles.text}>{el.text}</p>
            </li>
          ))}
        </ul>
        <ul className={styles.elements}>
          {data.statistics?.map((el, index) => (
            <li className={styles.element} key={index}>
              <h4 className={styles.subtitle}>{el.title}</h4>
              <p className={styles.descr}>{el.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
