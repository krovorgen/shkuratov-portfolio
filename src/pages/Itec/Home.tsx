import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { itec } from '../../data/HeroSectionData/itec';
import { Stats } from '../../components/Stats';
import { itec as itecStats } from '../../data/StatsSectionData/itec';
import { VideoYT } from '../../components/VideoYT';

import styles from './Home.module.scss';

export const Itec = () => {
  return (
    <>
      <Header page="itec" />
      <HeroSection page="itec" data={itec} />
      <Stats data={itecStats} />
      <VideoYT videoID="ql9TiOhGx0s" addClass={styles.videoYT} />
      <Navigation nextLink="/bomba" />
    </>
  );
};
