import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Bomba } from './pages/Bomba';
import { Dinamo } from './pages/Dinamo';
import { Itec } from './pages/Itec';
import { ScrollToTop } from './components/ScrollToTop';
import { AppRoutes } from './data/routes';
import { Keys } from './pages/Keys';

export const App = () => {
  return (
    <div className="main-wrap">
      <ScrollToTop>
        <Route path={AppRoutes.home} exact component={Home} />
        <Route path={AppRoutes.bomba} exact component={Bomba} />
        <Route path={AppRoutes.dinamo} exact component={Dinamo} />
        <Route path={AppRoutes.itec} exact component={Itec} />
        <Route path={AppRoutes.keys} exact component={Keys} />
      </ScrollToTop>
    </div>
  );
};
