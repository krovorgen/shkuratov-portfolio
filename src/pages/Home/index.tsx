import React from 'react';

import { Hero, Keys, MoreProject } from '../../components';

import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles['home']}>
      <Hero />
      <Keys />
      <MoreProject />
    </div>
  );
};

export default Home;
