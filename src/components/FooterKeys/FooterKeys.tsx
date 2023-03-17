import React from 'react';

import styles from './FooterKeys.module.scss';
import { LinkSocial } from '../LinkSocial';

export const FooterKeys = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <LinkSocial addClass={styles.link} social="telegram">
          Написать в телеграм
        </LinkSocial>
        <p className={styles.text}>
          <span>UX/UI designer</span>
        </p>
      </div>
    </footer>
  );
};
