import React from 'react';

import styles from './WatchAll.module.scss';
import { HashLink } from 'react-router-hash-link';

export const WatchAll = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <HashLink className={styles.link} smooth to="/#keys">
          <span>
            Смотреть все кейсы
            <svg>
              <use xlinkHref={`./images/sprite.svg#arrow-right`} />
            </svg>
          </span>
        </HashLink>
      </div>
    </div>
  );
};
