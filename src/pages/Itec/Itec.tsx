import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { itec } from '../../data/HeroSectionData/itec';
import { Stats } from '../../components/Stats';
import { itec as itecStats } from '../../data/StatsSectionData/itec';
import { VideoYT } from '../../components/VideoYT';
import { DescriptionKeys } from '../../components/DescriptionKeys';

import styles from './Itec.module.scss';
import { Brifing } from './Brifing';
import { UxResearch } from './UxResearch';
import { InterfaceDesign } from './InterfaceDesign';
import { UiDesign } from './UiDesign';

export const Itec = () => {
  return (
    <>
      <Header page="itec" />
      <HeroSection page="itec" data={itec} />
      <Stats data={itecStats} />
      <VideoYT videoID="6yoCtv5jol4" addClass={styles.videoYT} />
      <Brifing />
      <UxResearch />
      <InterfaceDesign />
      <UiDesign />
      <DescriptionKeys
        addClass={styles.descriptionKeys}
        description="Вся работа была сделана в кратчайшие сроки (7 дней). После утверждения дизайна макеты отправились к разработчикам. Проверяю вёрстку и метрики. Выдвигаю гипотезы по улучшению проекта опираясь на информацию из метрик. "
        link="itec.by"
      />
      <Navigation nextLink="/bomba" />
    </>
  );
};
