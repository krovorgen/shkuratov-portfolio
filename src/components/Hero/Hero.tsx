import React, { FC } from 'react';

import styles from './style.module.scss';

export const Hero: FC = () => {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <h1 className={styles['title']}>
          Product digital <span>designer.</span> <br />
          Помогу <span>улучшить UX/CX</span> <br />
          Вашего <span>продукта</span> или услуги <br />
        </h1>
        <ul className={styles['items']}>
          <li className={styles['item']}>
            <p className={styles['statistics']}>
              4 <span>года</span>
            </p>
            <p className={styles['description']}>
              <span>Опыт&nbsp;работы</span>&nbsp;с&nbsp;крупными проектами
            </p>
          </li>
          <li className={styles['item']}>
            <p className={styles['statistics']}>50+</p>
            <p className={styles['description']}>
              Реализованных <span>проектов</span>
            </p>
          </li>
          <li className={styles['item']}>
            <p className={styles['statistics']}>&gt;1 400 000</p>
            <p className={styles['description']}>
              <span>Человек</span> взаимодействуют c&nbsp;моим&nbsp;дизайном <span>ежедневно</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
