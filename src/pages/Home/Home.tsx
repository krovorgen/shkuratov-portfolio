import React from 'react';

import { Hero } from '../../components/Hero';
import { Keys } from '../../components/Keys';
import { MoreProject } from '../../components/MoreProject';

import styles from './style.module.scss';

export const Home = () => {
  return (
    <>
      <Hero />
      <Keys />
      <MoreProject />
    </>
  );
};
