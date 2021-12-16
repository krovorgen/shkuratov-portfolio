import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../../../components/Button';
import { keysData } from '../../../data/keysData';

import styles from './Keys.module.scss';

export const Keys: FC = () => {
  return (
    <section className={styles['keys']}>
      <div className="container">
        <ul className={styles['items']}>
          {keysData.map((item, index) => (
            <li className={`${styles.item} ${styles[item.name]}`} key={index}>
              <time className={styles.date}>{item.date}</time>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.bottom}>
                <NavLink className={styles.link} to={`/${item.name}`}>
                  <Button variant="span">Смотреть кейс</Button>
                </NavLink>
                <p className={styles.reading}>{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
