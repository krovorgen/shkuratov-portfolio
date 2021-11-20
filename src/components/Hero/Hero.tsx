import React, { FC } from 'react';

import styles from './style.module.scss';

export const Hero: FC = () => {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <h1 className={styles['hero__title']}>
          Product digital <span>designer.</span> <br />
          Помогу <span>улучшить UX/CX</span> <br />
          Вашего <span>продукта</span> или услуги <br />
        </h1>
        <ul className={styles['hero__items']}>
          <li className={styles['hero__item']}>
            <p className={styles['hero__statistics']}>
              4 <span>года</span>
            </p>
            <p className={styles['hero__description']}>
              <span>Опыт&nbsp;работы</span>&nbsp;с&nbsp;крупными проектами
            </p>
          </li>
          <li className={styles['hero__item']}>
            <p className={styles['hero__statistics']}>50+</p>
            <p className={styles['hero__description']}>
              Реализованных <span>проектов</span>
            </p>
          </li>
          <li className={styles['hero__item']}>
            <p className={styles['hero__statistics']}>&gt;1 400 000</p>
            <p className={styles['hero__description']}>
              <span>Человек</span> взаимодействуют c&nbsp;моим&nbsp;дизайном <span>ежедневно</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
