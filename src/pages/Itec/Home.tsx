import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';

export const Itec = () => {
  return (
    <>
      <Header page="itec" />
      <div className="container">Itec</div>
      <Navigation nextLink="/bomba" />
    </>
  );
};
