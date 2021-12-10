import React from 'react';

import { Hero } from '../../components/Hero';
import { Keys } from '../../components/Keys';
import { MoreProject } from '../../components/MoreProject';
import { Header } from '../../components/Header';
import { Company } from '../../components/Company';

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
