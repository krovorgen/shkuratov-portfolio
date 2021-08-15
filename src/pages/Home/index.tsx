import React from 'react';

import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <div className="container">
        <h1 className={styles['home__title']}>
          Product digital <span>designer.</span> <br />
          Помогу <span>улучшить UX/CX</span> <br />
          Вашего <span>продукта</span> или услуги <br />
        </h1>
        <ul className={styles['home__items']}>
          <li className={styles['home__item']}>
            <p className={styles['home__statistics']}>4 года</p>
          </li>
          <li className={styles['home__item']}>
            <p className={styles['home__statistics']}>50+</p>
          </li>
          <li className={styles['home__item']}>
            <p className={styles['home__statistics']}>&gt;1 400 000</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
