import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './MobileFirst.module.scss';

export const MobileFirst = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Title tag="h2" addClass={styles.title}>
          UI дизайн
        </Title>
        <Title tag="h3" addClass={styles.subtitle}>
          <mark>Mobile first</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Визуальный дизайн начал с мобильных устройств. Решение делать mobile first было принято исходя из статистики и
          аналитики имеющегося сайта
        </Paragraph>
        <div className={styles.wrap}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-1.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-2.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-3.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-4.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-5.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-6.png" />
            </li>
          </ul>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-7.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-8.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-9.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-10.png" />
            </li>
          </ul>
          <ul className={styles.items}>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-11.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-12.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-13.png" />
            </li>
            <li className={styles.item}>
              <PictureWithDescr pathImg="dinamo/mobile-first-14.png" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
