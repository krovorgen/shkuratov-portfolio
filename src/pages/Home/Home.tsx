import React from 'react';

import { Hero } from './Hero';
import { Keys } from './Keys';
import { MoreProject } from '../../components/MoreProject';
import { Header } from '../../components/Header';
import { Company } from './Company';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Keys />
      <MoreProject />
      <Company />
    </>
  );
};
