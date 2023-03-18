import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cn from 'classnames';

import { headerData } from '../../data/headerData';

import styles from './Header.module.scss';
import { AppRoutes } from '../../data/routes';

type HeaderProps = {
  page?: 'dinamo' | 'itec' | 'bomba';
};

export const Header: FC<HeaderProps> = memo(({ page }) => {
  const appearances = {
    [styles.dinamoPage]: page === 'dinamo',
    [styles.itecPage]: page === 'itec',
    [styles.bombaPage]: page === 'bomba',
  };

  return (
    <header className={cn(styles.header, appearances)}>
      <div className={`container ${styles.container}`}>
        <NavLink className={`logo ${styles.logo}`} to={AppRoutes.home}>
          <svg>
            <use xlinkHref={`./images/sprite.svg#logo`} />
          </svg>
        </NavLink>
        <nav className={styles.menu}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <HashLink className={styles.navigation} smooth to="/#keys">
                Кейсы
              </HashLink>
            </li>
            <li className={styles.item}>
              <a className={styles.navigation} href="/EvgenyShkuratovCV.pdf" target="_blank" rel="noopener">
                Резюме
              </a>
            </li>
            <li className={styles.item}>
              <NavLink to={AppRoutes.keys} activeClassName={styles.navigationActive} className={styles.navigation}>
                Галерея проектов
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className={styles.socials}>
          {headerData.map((item, index) => (
            <li className={styles.social} key={index}>
              <a
                className={cn(styles.link, 'icon', styles[item.social])}
                target="_blank"
                rel="noreferrer"
                href={item.href}
              >
                <img src={`./images/social-icon/${item.social}.svg`} alt={item.social} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
