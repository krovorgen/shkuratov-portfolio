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
          Всё начинается со сбора
          <br />
          <mark>информации о проекте</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Для начала важно определить настоящие цели и задачи проекта. Узнать всю информацию, понять что мы имеем на
          старте и какой объём работ предстоит выполнить
        </Paragraph>
        <PictureWithDescr pathImg="dinamo/UxResearch.png" description="Карта имеющихся страниц сайта" />
      </div>
    </section>
  );
};
