import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Route path="/" exact component={Home} />
      </main>
    </>
  );
};

export default App;
