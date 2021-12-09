import React from 'react';
import { MoreProject } from '../../components/MoreProject';
import { AboutMe } from './AboutMe';
import { WatchAll } from './WatchAll';
import { Header } from '../../components/Header';

export const About = () => {
  return (
    <>
      <Header page="about" />
      <AboutMe />
      <MoreProject />
      <WatchAll />
    </>
  );
};
