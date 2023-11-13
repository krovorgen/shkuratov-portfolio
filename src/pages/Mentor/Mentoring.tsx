import React, { FC } from 'react';

import styles from './Mentoring.module.scss';
import { LeadProductDesigner } from './LeadProductDesigner/LeadProductDesigner';
import { MentorstvoForYou } from './MentorstvoForYou/MentorstvoForYou';
import { LifetimeSupport } from './LifetimeSupport/LifetimeSupport';
import { FreeConsultation } from './FreeConsultation/FreeConsultation';
import { Steps } from './Steps/Steps';
import { Hero } from './Hero/Hero';

type Props = {};

export const Mentoring: FC<Props> = () => {
  return (
    <div className={styles.fake}>
      <Hero />
      <LifetimeSupport />
      <Steps />
      <MentorstvoForYou />
      <LeadProductDesigner />
      <FreeConsultation />
    </div>
  );
};
