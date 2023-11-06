import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.scss';
import { AppRoutes } from '../../data/routes';

interface INavigationProps {
  nextLink?: string;
}

export const Navigation: FC<INavigationProps> = ({ nextLink }) => {
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.container}`}>
        <NavLink className={cn(styles.link, styles.home)} to={AppRoutes.home}>
          <span>
            <svg>
              <use xlinkHref={`./images/sprite.svg#home`} />
            </svg>
            На главную
          </span>
        </NavLink>
        {nextLink && (
          <NavLink className={cn(styles.link, styles.next)} to={nextLink}>
            <span>
              Следующий кейс
              <svg>
                <use xlinkHref={`./images/sprite.svg#arrow-right`} />
              </svg>
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
};
