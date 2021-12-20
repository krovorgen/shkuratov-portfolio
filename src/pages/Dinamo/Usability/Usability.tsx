import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './Usability.module.scss';

export const Usability = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Title tag="h3" addClass={styles.descr}>
          <mark>Юзабилити тестирование </mark> прототипов
        </Title>
        <Paragraph addClass={styles.text}>
          Тестирование проводилось среди друзей и знакомых попадающих под нашу целевую аудиторию
        </Paragraph>
        <div className={styles.wrap}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/usability-1.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/usability-2.png" />
            </li>
          </ul>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/usability-3.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/usability-4.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/usability-5.png" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
