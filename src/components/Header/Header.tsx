import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cn from 'classnames';

import { headerData } from '../../data/headerData';

import styles from './Header.module.scss';

type HeaderProps = {
  page?: 'about' | 'dinamo' | 'itec' | 'bomba';
};

export const Header: FC<HeaderProps> = memo(({ page }) => {
  const appearances = {
    [styles.aboutPage]: page === 'about',
    [styles.dinamoPage]: page === 'dinamo',
    [styles.itecPage]: page === 'itec',
    [styles.bombaPage]: page === 'bomba',
  };

  return (
    <header className={cn(styles.header, appearances)}>
      <div className={`container ${styles.container}`}>
        <NavLink className={`logo ${styles.logo}`} to="/">
          <svg>
            <use xlinkHref={`./images/sprite.svg#logo`} />
          </svg>
        </NavLink>
        <nav className={styles.menu}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <NavLink to="/about" className={styles.navigation}>
                Эбаут
              </NavLink>
            </li>
            <li className={styles.item}>
              <a className={styles.navigation} href="/Резюме.pdf" target="_blank" rel="noopener">
                Резюме
              </a>
            </li>
            <li className={styles.item}>
              <HashLink className={styles.navigation} smooth to="/#keys">
                Проекты
              </HashLink>
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
