import React from 'react';

import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './UiDesign.module.scss';

export const UiDesign = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h2" addClass={styles.title}>
          <mark>UI Дизайн</mark>
        </Title>
        <Paragraph addClass={styles.text}>
          Заворачиваю проработанные смыслы в дизайн-концепцию. Акцент на взаимодействия на мобильных устройствах
        </Paragraph>
        <ul className={styles.items}>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-1.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-2.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-3.png" alt="" />
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-4.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-5.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-6.png" alt="" />
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-7.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-8.png" alt="" />
              </li>
              <li className={styles.element}>
                <img src="./images/bomba/ui-design-9.png" alt="" />
              </li>
            </ul>
          </li>
        </ul>
        <Paragraph addClass={styles.descr} variant="grey">
          Сайт на мобильных телефонах
        </Paragraph>
      </div>
    </section>
  );
};
