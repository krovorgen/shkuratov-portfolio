import React, { useEffect, useRef } from 'react';
import { Steps } from './Steps/Steps';
import { Keys } from './Keys/Keys';
import { Companies } from './Companies/Companies';
import { Hero } from './Hero/Hero';
import styles from './Home.module.scss';
import { Klondike } from './Klondike/Klondike';
import { ForWhom } from './ForWhom/ForWhom';
import { useLocation } from 'react-router-dom';
import { useClassNameWrap } from '../../Layouts/RootLayout/RootLayout';

export const Home = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  const { setMainClassName } = useClassNameWrap();

  useEffect(() => {
    setMainClassName(styles.mainPage);
    return () => setMainClassName('');
  }, [setMainClassName]);
  return (
    <div className={styles.fake}>
      <Hero />
      <Companies />
      <Klondike />
      <ForWhom />
      <Keys />
      <Steps />
    </div>
  );
};
