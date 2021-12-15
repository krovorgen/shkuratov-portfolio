import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { itec } from '../../data/HeroSectionData/itec';
import { Stats } from '../../components/Stats';
import { itec as itecStats } from '../../data/StatsSectionData/itec';

export const Itec = () => {
  return (
    <>
      <Header page="itec" />
      <HeroSection page="itec" data={itec} />
      <Stats data={itecStats} />
      <Navigation nextLink="/bomba" />
    </>
  );
};
