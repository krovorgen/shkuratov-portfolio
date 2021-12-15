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
      <Stats data={bombaStats} />
      <HeroSection page="bomba" data={bomba} />
      <Navigation nextLink="/dinamo" />
    </>
  );
};
