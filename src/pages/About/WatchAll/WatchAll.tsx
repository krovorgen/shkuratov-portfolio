import React from 'react';
import { Link } from 'react-router-dom';

import styles from './WatchAll.module.scss';

export const WatchAll = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <Link to="/" className={styles.link}>
          <span>
            Смотреть все кейсы
            <svg>
              <use xlinkHref={`./images/sprite.svg#arrow-right`} />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};
