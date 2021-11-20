import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Bomba } from './pages/Bomba';
import { Dinamo } from './pages/Dinamo';
import { Itec } from './pages/Itec';

const App = () => {
  return (
    <div className={'main-wrap'}>
      <Header />
      <main className="main">
        <Route path="/" exact component={Home} />
        <Route path="/bomba" exact component={Bomba} />
        <Route path="/dinamo" exact component={Dinamo} />
        <Route path="/itec" exact component={Itec} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
