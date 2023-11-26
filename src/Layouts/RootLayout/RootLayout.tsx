import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import { Header } from '../../components/Header';
import cn from 'classnames';

type ContextType = {
  setMainClassName: (v: string) => void;
};

export const RootLayout: FC<PropsWithChildren> = () => {
  const [mainClassName, setMainClassName] = useState('');
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={cn('main', mainClassName)}>
      <Header />
      <Outlet context={{ setMainClassName }} />
    </main>
  );
};

export const useClassNameWrap = () => {
  return useOutletContext<ContextType>();
};
