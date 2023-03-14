import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};
