import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

type DataType = {
  href: string;
  img: string;
  alt: string;
};

export const Header = () => {
  const data: DataType[] = [
    { href: 'https://t.me/ShkuratovDesigner/', img: './images/telegram.svg', alt: 'telegram' },
    { href: 'https://www.behance.net/heartlesss4aa8/', img: './images/behance.svg', alt: 'behance' },
    { href: 'https://www.linkedin.com/in/evgeny-shkuratov-b34a99174/', img: './images/linkedin.svg', alt: 'linkedin' },
    { href: 'https://www.instagram.com/shkuratovdesigner/', img: './images/instagram.svg', alt: 'instagram' },
  ];
  return (
    <header className={styles['header']}>
      <div className={`container ${styles['header__container']}`}>
        <NavLink className="logo" to="/">
          <svg>
            <use xlinkHref={`./images/sprite.svg#logo`} />
          </svg>
        </NavLink>
        <ul className={styles['header__items']}>
          {data.map((item) => (
            <li className={styles['header__item']}>
              <a className={styles['header__link']} target="_blank" rel="noreferrer" href={item.href}>
                <img src={item.img} alt={item.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
