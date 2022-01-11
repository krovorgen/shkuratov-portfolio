import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './Proto.module.scss';

export const Proto = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h2" addClass={styles.title}>
          <mark>Проектирование</mark>
        </Title>

        <Paragraph addClass={styles.text}>
          Оформляю описанные гипотезы в высокодетализированные прототипы. Пишу текст, показываю взаимодействия.
        </Paragraph>
        <PictureWithDescr addClass={styles.img} pathImg="bomba/proto-1.png" description="Прототипы" />
      </div>
    </section>
  );
};
