import React from 'react';

import { Navigation } from '../../components';

import styles from './style.module.scss';

const Dinamo = () => {
  return (
    <div className={styles['dinamo']}>
      <div className="container">Dinamo</div>
      <Navigation nextLink="/itec" />
    </div>
  );
};

export default Dinamo;
