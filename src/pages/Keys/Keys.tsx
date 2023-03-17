import React from 'react';

import { Header } from '../../components/Header';
import { FooterPage } from '../../components/FooterPage';
import { PremiumKeys } from '../../components/PremiumKeys';
import { Benefits } from '../../components/Benefits';
import { Gallery } from './Gallery';

export const Keys = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Gallery />
        <PremiumKeys />
        <Benefits />
      </main>
      <FooterPage />
    </>
  );
};
