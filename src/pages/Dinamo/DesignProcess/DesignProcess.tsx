import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './DesignProcess.module.scss';

export const DesignProcess = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h3" addClass={styles.title}>
          Определение <mark>дизайн-процесса</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Исходя из задачи и данных расписываю дизайн-процесс. Показываю этапы проектирования дизайна и как они помогут
          решить задачу
        </Paragraph>
        <PictureWithDescr pathImg={'dinamo/design-process.png'} description="Дизайн-процесс" />
      </div>
    </section>
  );
};
