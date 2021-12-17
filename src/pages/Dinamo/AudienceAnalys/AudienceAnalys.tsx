import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './AudienceAnalys.module.scss';

export const AudienceAnalys = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h3" addClass={styles.title}>
          Анализируем <mark>целевую аудиторию</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          На основе интервью с работниками стадиона составляю портреты пользователей. С клиентом расписываем основные
          пользовательские истории по каждому портрету
        </Paragraph>
        <ul className={styles.items}>
          <li className={styles.item}>
            <PictureWithDescr pathImg={'dinamo/analys-1.png'} description="Персонажи пользователей" />
          </li>
          <li className={styles.item}>
            <PictureWithDescr pathImg={'dinamo/analys-2.png'} description="Пользовательские истории" />
          </li>
        </ul>
      </div>
    </section>
  );
};
