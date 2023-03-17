import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../../../components/Button';
import { keysData } from '../../../data/keysData';

import styles from './Keys.module.scss';

export const Keys: FC = () => {
  return (
    <section className={styles.keys}>
      <div className="container">
        <ul className={styles.items}>
          {keysData.map((item, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.info}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
                <NavLink className={styles.link} to={item.url}>
                  <Button variant="span">Смотреть кейс</Button>
                </NavLink>
              </div>
              <div className={styles.img}>
                <img src={item.imgPath} width={658} height={528} alt={item.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
