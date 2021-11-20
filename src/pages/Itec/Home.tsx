import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

import styles from './style.module.scss';

export const Itec = () => {
  return (
    <div className={styles['itec']}>
      <div className="container">Itec</div>
      <Navigation nextLink="/bomba" />
    </div>
  );
};
