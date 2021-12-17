import React, { FC } from 'react';

import styles from './Stats.module.scss';

export type StatsSectionData = {
  head: { title: string; text: JSX.Element | string }[];
  statistics?: { title: string; text: JSX.Element | string }[];
};

export type StatsProps = {
  data: StatsSectionData;
};

export const Stats: FC<StatsProps> = ({ data }) => {
  return (
    <div className={styles.root}>
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
