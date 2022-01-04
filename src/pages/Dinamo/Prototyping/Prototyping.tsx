import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import gif1 from '../../../images/gifs/1.gif';
import gif2 from '../../../images/gifs/2.gif';

import styles from './Prototyping.module.scss';

export const Prototyping = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Title tag="h2" addClass={styles.title}>
          Проектирование интерфейса
        </Title>
        <Title tag="h3" addClass={styles.descr}>
          <mark>Прототипирование </mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Данный этап сразу начал с высокодетализированных прототипов, т.к в голове уже было чёткое видение. В проекте
          нет большого количества сложных взаимодействий. Всё это позволило пропустить этап проектирования
          низкодетализированных прототипов и сэкономить время не потеряв качество
        </Paragraph>
        <div className={styles.wrap}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-1.png" description="Главная страница" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-2.png" description="Медиа" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-3.png" description="Оформление заказа" />
            </li>
          </ul>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-4.png" description="Новости" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-5.png" description="Услуги" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/prototyping-6.png" description="Оформление заказа" />
            </li>
          </ul>
        </div>
        <Title tag="h3" addClass={styles.subtitle}>
          Большой упор делается на <mark>микровзаимодействия</mark>. Эффекты наведения. Cостояния интерактивных
          элементов.
        </Title>
        <div className={styles.inner}>
          <img src={gif1} alt="Презентация" />
          <img src={gif2} alt="Презентация" />
        </div>
      </div>
    </section>
  );
};
