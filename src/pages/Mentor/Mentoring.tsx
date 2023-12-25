import React, { FC, useEffect } from 'react';

import styles from './Mentoring.module.scss';
import { LeadProductDesigner } from './LeadProductDesigner/LeadProductDesigner';
import { MentorstvoForYou } from './MentorstvoForYou/MentorstvoForYou';
import { LifetimeSupport } from './LifetimeSupport/LifetimeSupport';
import { FreeConsultation } from './FreeConsultation/FreeConsultation';
import { Steps } from './Steps/Steps';
import { Hero } from './Hero/Hero';
import { useClassNameWrap } from '../../Layouts/RootLayout/RootLayout';

type Props = {};

export const Mentoring: FC<Props> = () => {
  const { setMainClassName } = useClassNameWrap();

  useEffect(() => {
    setMainClassName(styles.mentoringPage);
    return () => setMainClassName('');
  }, [setMainClassName]);
  return (
    <>
      <Hero />
      <LifetimeSupport />
      <Steps />
      <MentorstvoForYou />
      <LeadProductDesigner />
      <FreeConsultation />
    </>
  );
};
