import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { headerData } from '../../data/headerData';

import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={`container ${styles['container']}`}>
        <NavLink className="logo" to="/">
          <svg>
            <use xlinkHref={`./images/sprite.svg#logo`} />
          </svg>
        </NavLink>
        <ul className={styles['items']}>
          {headerData.map((item, index) => (
            <li className={styles['item']} key={index}>
              <a
                className={cn(styles['link'], 'icon', styles[item.social])}
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
};
