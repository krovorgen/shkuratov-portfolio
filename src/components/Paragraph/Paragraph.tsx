import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Paragraph.module.scss';

type ParagraphProps = {
  variant?: 'grey' | 'black';
  addClass?: string;
};
export const Paragraph: FC<ParagraphProps> = ({ children, variant = 'black', addClass }) => {
  const appearances = {
    [styles.black]: variant === 'black',
    [styles.grey]: variant === 'grey',
  };
  return <p className={cn(styles.text, appearances, addClass)}>{children}</p>;
};
