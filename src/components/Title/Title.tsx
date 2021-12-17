import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

type TitleProps = {
  tag: 'h2' | 'h3';
  addClass?: string;
  children: React.ReactNode;
};

export const Title: FC<TitleProps> = ({ tag, addClass, children }) => {
  return (
    <>
      {tag === 'h2' ? <h2 className={cn(styles.title, addClass)}>{children}</h2> : null}
      {tag === 'h3' ? <h3 className={cn(styles.subtitle, addClass)}>{children}</h3> : null}
    </>
  );
};
