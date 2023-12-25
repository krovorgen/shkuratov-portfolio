import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './UxResearch.module.scss';

export const UxResearch = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h2" addClass={styles.title}>
          Ux-research
        </Title>
        <Title tag="h3" addClass={styles.descr}>
          Определение
          <br />
          <mark>дизайн-процесса</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Осмыслив и проанализировав информацию определяю процесс, какие методологии проектирования мне понадобятся для
          решения задач проекта
        </Paragraph>
        <PictureWithDescr pathImg="bomba/ux-research-1.png" description="Дизайн-процесс" />
      </div>
    </section>
  );
};
