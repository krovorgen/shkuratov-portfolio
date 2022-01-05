import React, { FC } from 'react';
import Tippy from '@tippyjs/react';

import { heroData } from '../../../data/heroData';

import styles from './Hero.module.scss';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Product digital <span>designer.</span> <br />
          Помогу{' '}
          <span>
            улучшить{' '}
            <Tippy
              content={
                <div className={styles.tooltip}>
                  <mark>UX</mark> — опыт и ощущения людей от использования Вашего <span>цифрового</span> продукта.{' '}
                  <mark>CX</mark> — эмоции человека от взаимодействия с Вашим <span>бизнесом.</span>
                </div>
              }
              theme="light-border"
            >
              <mark className={styles.faq}>
                UX/CX
                <svg>
                  <use xlinkHref={`./images/sprite.svg#faq`} />
                </svg>
              </mark>
            </Tippy>
          </span>{' '}
          <br />
          Вашего <span>продукта</span> или услуги <br />
        </h1>
        <ul className={styles.items}>
          {heroData.map((item, index) => (
            <li className={styles.item} key={index}>
              <p className={styles.statistics}>{item.statistics}</p>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <span id="keys" />
    </section>
  );
};
