import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

interface INavigationProps {
  nextLink: string;
}

const Navigation: FC<INavigationProps> = ({ nextLink }) => {
  return (
    <div className={styles['navigation']}>
      <div className={`container ${styles['navigation__container']}`}>
        <NavLink className={styles['navigation__link']} to="/">
          На главную
        </NavLink>
        <NavLink className={styles['navigation__link']} to={nextLink}>
          Следующий кейс
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
