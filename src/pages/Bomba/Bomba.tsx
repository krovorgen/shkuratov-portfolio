import React from 'react';

import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from '../../components/HeroSection';
import { bomba } from '../../data/HeroSectionData/bomba';
import { bomba as bombaStats } from '../../data/StatsSectionData/bomba';
import { Stats } from '../../components/Stats';

export const Bomba = () => {
  return (
    <>
      <Header page="bomba" />
      <HeroSection page="bomba" data={bomba} />
      <Stats data={bombaStats} />
      <Navigation nextLink="/dinamo" />
    </>
  );
};
