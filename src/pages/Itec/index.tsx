import React from 'react';

import { Navigation } from '../../components';

import styles from './style.module.scss';

const Itec = () => {
  return (
    <div className={styles['itec']}>
      <div className="container">Itec</div>
      <Navigation nextLink="/bomba" />
    </div>
  );
};

export default Itec;
