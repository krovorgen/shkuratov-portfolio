import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { dinamo } from '../../data/HeroSectionData/dinamo';
import { Stats } from '../../components/Stats';
import { dinamo as dinamoStats } from '../../data/StatsSectionData/dinamo';
import { VideoYT } from '../../components/VideoYT';
import { UxResearch } from './UxResearch';
import { OldPage } from './OldPage';
import { DesignProcess } from './DesignProcess';
import { AudienceAnalys } from './AudienceAnalys';

import styles from './Dinamo.module.scss';
import { JourneyMap } from './JourneyMap';

export const Dinamo = () => {
  return (
    <>
      <Header page="dinamo" />
      <HeroSection page="dinamo" data={dinamo} />
      <Stats data={dinamoStats} />
      <VideoYT videoID="ql9TiOhGx0s" addClass={styles.videoYT} />
      <UxResearch />
      <OldPage />
      <DesignProcess />
      <AudienceAnalys />
      <JourneyMap />
      <Navigation nextLink="/itec" />
    </>
  );
};
