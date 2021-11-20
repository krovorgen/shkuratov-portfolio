import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={`container ${styles['header__container']}`}>
        <NavLink className="logo" to="/">
          <img src="./images/logo.svg" alt="Evgeniy Shkuratov" />
        </NavLink>
        <ul className={styles['header__items']}>
          <li className={styles['header__item']}>
            <a className={styles['header__link']} href="#">
              <img src="./images/telegram.svg" alt="telegram" />
            </a>
          </li>
          <li className={styles['header__item']}>
            <a className={styles['header__link']} href="#">
              <img src="./images/shape.svg" alt="shape" />
            </a>
          </li>
          <li className={styles['header__item']}>
            <a className={styles['header__link']} href="#">
              <img src="./images/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className={styles['header__item']}>
            <a className={styles['header__link']} href="#">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
