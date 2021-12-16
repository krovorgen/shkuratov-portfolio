import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { dinamo } from '../../data/HeroSectionData/dinamo';
import { Stats } from '../../components/Stats';
import { dinamo as dinamoStats } from '../../data/StatsSectionData/dinamo';
import { VideoYT } from '../../components/VideoYT';

import styles from './Dinamo.module.scss';

export const Dinamo = () => {
  return (
    <>
      <Header page="dinamo" />
      <HeroSection page="dinamo" data={dinamo} />
      <Stats data={dinamoStats} />
      <VideoYT videoID="ql9TiOhGx0s" addClass={styles.videoYT} />
      <Navigation nextLink="/itec" />
    </>
  );
};
