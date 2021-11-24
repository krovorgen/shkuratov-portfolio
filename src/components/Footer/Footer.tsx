import React from 'react';

import styles from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['inner']}>
          <a className={styles['link']} href="https://t.me/ShkuratovDesigner/">
            <svg>
              <use xlinkHref={`./images/sprite.svg#telegram-2`} />
            </svg>
            Написать в телеграм
          </a>
          <p className={styles['text']}>Product digital designer</p>
        </div>
      </div>
    </footer>
  );
};
