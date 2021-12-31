import React from 'react';

import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import { PictureWithDescr } from '../../../components/PictureWithDescr';

import styles from './Brifing.module.scss';

export const Brifing = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title addClass={styles.title} tag="h2">
          Брифинг, определение целей проекта
        </Title>
        <Paragraph addClass={styles.text}>
          Созвонились, обсудили задачу, идею и докопались до сути того, что нужно клиенту для достижения его
          бизнес-целей
        </Paragraph>
        <PictureWithDescr pathImg="itec/brifing-1.png" description="Брифинг клиента" />
      </div>
    </section>
  );
};
