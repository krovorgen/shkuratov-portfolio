import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './Analysis.module.scss';

export const Analysis = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h3" addClass={styles.title}>
          <mark>Анализ конкурентов</mark>
          <br />и домена в целом
        </Title>
        <Paragraph addClass={styles.text}>
          Разбираюсь, что там происходит у конкурентов. Как обстоят дела на рынке. Ищу хорошие бизнес и визуальные
          решения.
        </Paragraph>
        <ul className={styles.items}>
          <li className={styles.item}>
            <PictureWithDescr pathImg="bomba/analysis-1.png" description="Анализ конкурентов" />
          </li>
          <li className={styles.item}>
            <PictureWithDescr pathImg="bomba/analysis-2.png" description="Анализ конкурентов" />
          </li>
        </ul>

        <Title tag="h3" addClass={styles.pretitle}>
          Анализирую старый сайт.
          <br />
          <mark>Составляю карту сайта</mark>
        </Title>
        <PictureWithDescr addClass={styles.map} pathImg="bomba/analysis-3.png" description="Карта сайта" />

        <Title tag="h3" addClass={styles.subtitle}>
          Изучаю и анализирую метрики
          <br />и работу существующего сайта
        </Title>
        <PictureWithDescr addClass={styles.oldSite} pathImg="bomba/analysis-4.png" description="Старый сайт" />
        <PictureWithDescr
          addClass={styles.metrics}
          pathImg="bomba/analysis-5.png"
          description="Метрики старого сайта"
        />

        <Title tag="h3" addClass={styles.mainProblem}>
          На основе анализа описываю <mark>основные проблемы и их решения</mark>
        </Title>
        <PictureWithDescr
          addClass={styles.oldSiteMetrics}
          pathImg="bomba/analysis-6.png"
          description="Метрики старого сайта"
        />

        <Title tag="h3" addClass={styles.sripts}>
          Имея достаточное количество полезной информации прорабатываю{' '}
          <mark>основные сценарии использования сайта</mark>
        </Title>
        <Paragraph addClass={styles.descr}>
          Делаю пометки на этапах где нужно внедрить решения описанные на этапе анализа проблем, аудитории и данных
          существующего сайта
        </Paragraph>
        <PictureWithDescr
          addClass={styles.oldSite}
          pathImg="bomba/analysis-7.png"
          description="Сценарии использования сайта"
        />
      </div>
    </section>
  );
};
