import React from 'react';

import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from '../../components/HeroSection';
import { bomba } from '../../data/HeroSectionData/bomba';
import { bomba as bombaStats } from '../../data/StatsSectionData/bomba';
import { Stats } from '../../components/Stats';
import { VideoYT } from '../../components/VideoYT';
import { Briffing } from './Briffing';
import { UxResearch } from './UxResearch';
import { Analysis } from './Analysis';
import { Proto } from './Proto';
import { UiDesign } from './UiDesign';
import { Gallery } from './Gallery';

import styles from './Bomba.module.scss';

export const Bomba = () => {
  return (
    <>
      <Header page="bomba" />
      <HeroSection page="bomba" data={bomba} />
      <Stats data={bombaStats} />
      <VideoYT videoID="ql9TiOhGx0s" addClass={styles.videoYT} />
      <Briffing />
      <UxResearch />
      <Analysis />
      <Proto />
      <UiDesign />
      <Gallery />
      <Navigation nextLink="/dinamo" />
    </>
  );
};
