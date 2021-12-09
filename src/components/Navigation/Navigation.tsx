import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

interface INavigationProps {
  nextLink: string;
}

export const Navigation: FC<INavigationProps> = ({ nextLink }) => {
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.container}`}>
        <NavLink className={styles.link} to="/">
          На главную
        </NavLink>
        <NavLink className={styles.link} to={nextLink}>
          Следующий кейс
        </NavLink>
      </div>
    </div>
  );
};
