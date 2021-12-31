import React from 'react';

import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import { PictureWithDescr } from '../../../components/PictureWithDescr';

import styles from './UxResearch.module.scss';

export const UxResearch = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title addClass={styles.title} tag="h2">
          Ux-research
        </Title>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Title addClass={styles.subtitle} tag="h3">
              Определение <mark>дизайн-процесса</mark>
            </Title>
            <Paragraph addClass={styles.text}>
              С задачами и целями проекта определились. Теперь надо понять как и за счёт чего мы достигнем этих целей
            </Paragraph>
            <PictureWithDescr pathImg="itec/ux-research-1.png" description="Дизайн-процесс" />
          </li>
          <li className={styles.item}>
            <Title addClass={styles.subtitle} tag="h3">
              Анализ <mark>конкурентов</mark>
            </Title>
            <Paragraph addClass={styles.text}>
              Составляю сводную таблицу по конкурентам. Собираю мудборд хороших визуальных и бизнес решений в данной
              сфере
            </Paragraph>
            <PictureWithDescr pathImg="itec/ux-research-2.png" description="Анализ конкурентов" />
          </li>
          <li className={styles.item}>
            <Title addClass={styles.subtitle} tag="h3">
              Анализ <mark>целевой аудитории</mark>
            </Title>
            <Paragraph addClass={styles.text}>
              На основе интервью с преподавателями составляю портреты пользователей
            </Paragraph>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <PictureWithDescr pathImg="itec/ux-research-3.png" description="Персонаж студента" />
              </li>
              <li className={styles.element}>
                <PictureWithDescr pathImg="itec/ux-research-4.png" description="Персонаж родителя" />
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Title addClass={styles.subtitle} tag="h3">
              <mark>Мудборд</mark> интересных визуальных решений
            </Title>
            <Paragraph addClass={styles.text}>
              Опираясь на анализ аудитории и конкурентов собираю классные визуальные и маркетинговые решения
            </Paragraph>
            <PictureWithDescr pathImg="itec/ux-research-5.png" description="Мудборд" />
          </li>
        </ul>
      </div>
    </section>
  );
};
