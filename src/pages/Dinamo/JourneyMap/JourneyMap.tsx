import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './JourneyMap.module.scss';

export const JourneyMap = () => {
  return (
    <section className={styles.root}>
      <img className={styles.images} src={`./images/dinamo/journey-map-top.png`} alt="Картинка" />
      <div className={styles.wrap}>
        <div className="container">
          <div className={styles.element}>
            <Title tag="h3" addClass={styles.title}>
              Составляю <mark>Сustomer Journey&nbsp;Map</mark>
            </Title>
            <Paragraph addClass={styles.text}>
              Карта взаимодействия пользователя с продуктом помогает определить все болевые точки и наметить пути их
              решения, которые в последствии будут реализованы в интерфейсе
            </Paragraph>
            <PictureWithDescr pathImg={'dinamo/journey-map-1.png'} description="CJM" />
          </div>
          <div className={styles.element}>
            <Title tag="h3" addClass={styles.title}>
              Прорабатываю основные <mark>User&nbsp;flows</mark>
            </Title>
            <Paragraph addClass={styles.text}>
              Пути пользователя помогают посмотреть на взаимодействие под другим углом и упростить процесс достижения
              целей пользователем
            </Paragraph>
            <ul className={styles.items}>
              <li className={styles.item}>
                <PictureWithDescr pathImg={'dinamo/journey-map-2.png'} description="User flow" />
              </li>
              <li className={styles.item}>
                <PictureWithDescr pathImg={'dinamo/journey-map-3.png'} description="User flow" />
              </li>
            </ul>
          </div>
          <Paragraph addClass={styles.descr} size="sm">
            Этапу исследования пользователей, их целям, ожиданиям и мировоззрению уделяю особое внимание. Именно это
            позволяет создавать мощные решения, с которыми приятно взаимодействовать
          </Paragraph>
        </div>
      </div>
      <img className={styles.images} src={`./images/dinamo/journey-map-bot.png`} alt="Картинка" />{' '}
    </section>
  );
};
