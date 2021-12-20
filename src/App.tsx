import React from 'react';
import { Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Bomba } from './pages/Bomba';
import { Dinamo } from './pages/Dinamo';
import { Itec } from './pages/Itec';
import { About } from './pages/About';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  return (
    <div className="main-wrap">
      <main className="main">
        <ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/bomba" exact component={Bomba} />
          <Route path="/dinamo" exact component={Dinamo} />
          <Route path="/itec" exact component={Itec} />
          <Route path="/about" exact component={About} />
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
};
