import React from 'react';
import styles from './Benefits.module.scss';
import { LinkSocial } from '../LinkSocial';

export const Benefits = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Проведу исследование, аналитику. Соберу информацию, напишу тексты. Спроектирую интерфейс. Разработаю концепцию
          и&nbsp;дизайн.
        </h2>

        <ul className={styles.items}>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Исследования</h3>
            <ul className={styles.elements}>
              <li className={styles.element}>Конкурентный анализ</li>
              <li className={styles.element}>Use case, user flow</li>
              <li className={styles.element}>Глубинное интервью</li>
              <li className={styles.element}>CJM</li>
              <li className={styles.element}>Jobs to&nbsp;be&nbsp;done, personas</li>
              <li className={styles.element}>Usability test, UX-аудит</li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>UX-дизайн</h3>
            <ul className={styles.elements}>
              <li className={styles.element}>Прототипирование</li>
              <li className={styles.element}>UX-копирайтинг</li>
              <li className={styles.element}>Гайдлайны</li>
              <li className={styles.element}>UI-дизайн</li>
              <li className={styles.element}>Дизайн-системы</li>
              <li className={styles.element}>Mobile-first подход</li>
            </ul>
          </li>
        </ul>

        <LinkSocial addClass={styles.link} social="telegram">
          Написать в телеграм
        </LinkSocial>
      </div>
    </section>
  );
};
