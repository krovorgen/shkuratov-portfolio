import React from 'react';

import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from '../../components/HeroSection';
import { bomba } from '../../data/HeroSectionData/bomba';
import { bomba as bombaStats } from '../../data/StatsSectionData/bomba';
import { Stats } from '../../components/Stats';
import { VideoYT } from '../../components/VideoYT';

import styles from './Bomba.module.scss';

export const Bomba = () => {
  return (
    <>
      <Header page="bomba" />
      <HeroSection page="bomba" data={bomba} />
      <Stats data={bombaStats} />
      <VideoYT videoID="ql9TiOhGx0s" addClass={styles.videoYT} />
      <Navigation nextLink="/dinamo" />
    </>
  );
};
