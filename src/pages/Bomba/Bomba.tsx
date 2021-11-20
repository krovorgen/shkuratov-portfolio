import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

import styles from './style.module.scss';

export const Bomba = () => {
  return (
    <div className={styles['bomba']}>
      <div className="container">Bomba</div>
      <Navigation nextLink="/dinamo" />
    </div>
  );
};
