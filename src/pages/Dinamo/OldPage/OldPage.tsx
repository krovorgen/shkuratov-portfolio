import React from 'react';
import cn from 'classnames';

import { Paragraph } from '../../../components/Paragraph';

import styles from './OldPage.module.scss';

export const OldPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <ul className={cn(styles.items, styles.itemsTop)}>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-1.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-2.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-3.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-4.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
        </ul>
        <ul className={cn(styles.items, styles.itemsBottom)}>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-5.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-6.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-7.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
          <li className={styles.item}>
            <img src="./images/dinamo/old-page-7.png" width="436" height="244" alt="Старые страницы сайта" />
          </li>
        </ul>
      </div>
      <div className="container">
        <Paragraph addClass={styles.text} variant="grey">
          Старые страницы сайта
        </Paragraph>
      </div>
    </div>
  );
};
