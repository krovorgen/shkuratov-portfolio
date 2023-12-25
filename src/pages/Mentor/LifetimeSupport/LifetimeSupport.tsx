import React, { FC } from 'react';

import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import styles from './LifetimeSupport.module.scss';
import { Label } from '../../Home/Label/Label';

type Props = {};

export const LifetimeSupport: FC<Props> = () => (
  <section className={styles.root}>
    <div className="container">
      <div className={styles.wrap}>
        <Label className={styles.label} center iconColor="red">
          Что входит в услугу
        </Label>
        <h2 className={styles.title}>
          Уникальная программа роста с <mark>пожизненной поддержкой</mark>
        </h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <p className={styles.text}>2 личных созвона в неделю</p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Пожизненная поддержка в телеграм</p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>
                  <mark>Консультация с HR</mark> специалистом
                </p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>
                  <mark>Реальное собеседование</mark> с обратной связью
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <p className={styles.text}>Гайд по UX-исследованиям</p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Индивидуальный план достижения целей</p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Персонализированные домашние задания </p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Безлимитная проверка работ</p>
              </li>
            </ul>
          </li>
        </ul>
        <Button className={styles.btn} center variant="accent" Component="a" href={SocialLink.telegram} target="_blank">
          Хочу роста и развития
        </Button>
      </div>
    </div>
  </section>
);
