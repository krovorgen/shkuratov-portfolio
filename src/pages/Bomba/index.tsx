import React from 'react';

import { Navigation } from '../../components';

import styles from './style.module.scss';

const Bomba = () => {
  return (
    <div className={styles['bomba']}>
      <div className="container">Bomba</div>
      <Navigation nextLink="/dinamo" />
    </div>
  );
};

export default Bomba;
