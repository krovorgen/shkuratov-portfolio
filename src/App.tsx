import React from 'react';
import { Route } from 'react-router-dom';

import { Bomba, Dinamo, Home, Itec } from './pages';
import { Footer, Header } from './components';

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
