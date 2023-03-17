import React from 'react';

import { Hero } from './Hero';
import { Keys } from './Keys';
import { MoreProject } from '../../components/MoreProject';
import { Header } from '../../components/Header';
import { Company } from './Company';
import { FooterPage } from '../../components/FooterPage';
import { PremiumKeys } from '../../components/PremiumKeys';
import { Benefits } from '../../components/Benefits';

export const Home = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Hero />
        <Company />
        <PremiumKeys />
        <Keys />
        <MoreProject />
        <Benefits />
      </main>
      <FooterPage />
    </>
  );
};
