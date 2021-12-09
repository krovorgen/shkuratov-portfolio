import React from 'react';

import { Hero } from '../../components/Hero';
import { Keys } from '../../components/Keys';
import { MoreProject } from '../../components/MoreProject';
import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Keys />
      <MoreProject />
    </>
  );
};
