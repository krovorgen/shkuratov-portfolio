import React from 'react';

import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={`container ${styles['header__container']}`}>
        <a className="logo" href="/">
          <img src="./images/logo.svg" alt="Evgeniy Shkuratov" />
        </a>
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

export default Header;
