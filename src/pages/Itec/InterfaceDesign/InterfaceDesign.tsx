import React from 'react';

import styles from './InterfaceDesign.module.scss';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import { PictureWithDescr } from '../../../components/PictureWithDescr';

export const InterfaceDesign = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title addClass={styles.title} tag="h2">
          Проектирование интерфейса
        </Title>
        <Title addClass={styles.subtitle} tag="h3">
          <mark>Прототипирование</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Начинаем со скетчей (низкодетализированных прототипов) для того чтобы правильно расставить акценты и
          спроектировать примерное расположение и количество контента
        </Paragraph>
        <PictureWithDescr addClass={styles.picture} pathImg="itec/interface-design-1.png" />
        <Paragraph addClass={styles.descr}>
          Далее продумываю и пишу текст. Переношу это всё в детализированные интерактивные прототипы
        </Paragraph>
        <ul className={styles.items}>
          <li className={styles.item}>
            <PictureWithDescr pathImg="itec/interface-design-2.png" />
          </li>
          <li className={styles.item}>
            <PictureWithDescr pathImg="itec/interface-design-3.png" />
          </li>
        </ul>
      </div>
    </section>
  );
};
