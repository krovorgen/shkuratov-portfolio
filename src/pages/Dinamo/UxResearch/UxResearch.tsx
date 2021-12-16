import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';

import styles from './UxResearch.module.scss';

export const UxResearch = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Ux-research</h2>
        <p className={styles.descr}>
          Всё начинается со сбора <mark>информации о проекте</mark>
        </p>
        <p className={styles.text}>
          Для начала важно определить настоящие цели и задачи проекта. Узнать всю информацию, понять что мы имеем на
          старте и какой объём работ предстоит выполнить
        </p>
        <PictureWithDescr pathImg="dinamo/UxResearch.png" description="Карта имеющихся страниц сайта" />
      </div>
    </section>
  );
};
