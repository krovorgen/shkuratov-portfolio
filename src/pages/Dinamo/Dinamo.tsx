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
import { JourneyMap } from './JourneyMap';
import { Prototyping } from './Prototyping';
import { MobileFirst } from './MobileFirst';
import { Gallery } from './Gallery';
import { Usability } from './Usability';
import { DesktopDemo } from './DesktopDemo';
import { DescriptionKeys } from '../../components/DescriptionKeys';

import styles from './Dinamo.module.scss';

export const Dinamo = () => {
  return (
    <>
      <Header page="dinamo" />
      <HeroSection page="dinamo" data={dinamo} />
      <Stats data={dinamoStats} />
      <VideoYT videoID="u45e_Hche8g" addClass={styles.videoYT} />
      <UxResearch />
      <OldPage />
      <DesignProcess />
      <AudienceAnalys />
      <JourneyMap />
      <Prototyping />
      <Usability />
      <MobileFirst />
      <Gallery />
      <DesktopDemo />
      <DescriptionKeys
        addClass={styles.descriptionKeys}
        description="На этом работа над проектом не заканчивается. Проверка вёрстки, плавности анимации, скринкасты метрики и правки. Всё это необходимо для достижения результатов."
        link="stadium-dinamo.by"
      />
      <Navigation nextLink="/itec" />
    </>
  );
};
