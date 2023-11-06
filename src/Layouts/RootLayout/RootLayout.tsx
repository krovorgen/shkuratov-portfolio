import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import cn from 'classnames';

export const RootLayout: FC<PropsWithChildren> = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main className={cn('main')}>
      <Header />
      <Outlet />
    </main>
  );
};
