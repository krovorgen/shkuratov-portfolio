import React from 'react';

import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';

export const Bomba = () => {
  return (
    <>
      <Header page="bomba" />
      <div className="container">Bomba</div>
      <Navigation nextLink="/dinamo" />
    </>
  );
};
