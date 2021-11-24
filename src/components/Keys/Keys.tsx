import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';
import { Button } from '../Button';

type DataType = {
  name: string;
  date: string;
  title: JSX.Element;
  period: string;
};

export const Keys: FC = () => {
  const data: DataType[] = [
    {
      name: 'dinamo',
      date: 'Январь 2021',
      title: (
        <>
          Национальный олимпийский <span>стадион-динамо</span>
        </>
      ),
      period: '≈ 5-8 минут',
    },
    {
      name: 'itec',
      date: 'Ноябрь 2020',
      title: (
        <>
          <span>IT-курсы</span> для программистов
        </>
      ),
      period: '≈ 4-7 минут',
    },
    {
      name: 'bomba',
      date: 'Февраль 2021',
      title: (
        <>
          Интернет-магазин <span>пиротехники</span>
        </>
      ),
      period: '≈ 4-7 минут',
    },
  ];
  return (
    <section className={styles['keys']}>
      <div className="container">
        <ul className={styles['keys__items']}>
          {data.map((item, index) => (
            <li className={`${styles['keys__item']} ${styles[`keys__item--${item.name}`]}`} key={index}>
              <time className={styles['keys__date']}>${item.date}</time>
              <h2 className={styles['keys__title']}>${item.title}</h2>
              <div className={styles['keys__bottom']}>
                <NavLink className={styles['keys__link']} to={`/${item.name}`}>
                  <Button variant="span">Смотреть кейс</Button>
                </NavLink>
                <p className={styles['keys__reading']}>${item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
