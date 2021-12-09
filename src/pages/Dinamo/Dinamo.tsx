import React from 'react';

import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';

export const Dinamo = () => {
  return (
    <>
      <Header page="dinamo" />
      <div className="container">Dinamo</div>
      <Navigation nextLink="/itec" />
    </>
  );
};
