import React, { FC } from 'react';

import styles from './MoreProject.module.scss';
import { Carousel } from '../Carousel';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../data/routes';
import arrow from '../../../images/arrow.svg';

export const MoreProject: FC = () => {
  return (
    <section className={styles.root} id="project">
      <div className="container">
        <h2 className={styles.title}>Галерея фриланс проектов</h2>
        <p className={styles.text}>
          Иногда беру интересные проекты на фрилансе. На странице галереи вы найдёте ссылки на сайты и небольшие
          описания проектов
        </p>
        <Carousel />

        <NavLink className={styles.link} to={AppRoutes.keys}>
          Перейти к галерее
          <img className={styles.arrow} src={arrow} alt="Arrow" />
        </NavLink>
      </div>
    </section>
  );
};
