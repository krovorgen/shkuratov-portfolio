import React from 'react';

import styles from './style.module.scss';
import cn from 'classnames';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['inner']}>
          <a className={styles['link']} href="https://t.me/ShkuratovDesigner/">
            <span className={cn(styles['telegram'], 'icon')}>
              <img src={`./images/social-icon/telegram.svg`} alt="telegram" />
            </span>
            Написать в телеграм
          </a>
          <p className={styles['text']}>
            <span>Product digital designer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
