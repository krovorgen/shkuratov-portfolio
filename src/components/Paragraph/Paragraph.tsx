import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Paragraph.module.scss';

type ParagraphProps = {
  variant?: 'grey' | 'black';
  addClass?: string;
  size?: 'xs' | 'sm';
};
export const Paragraph: FC<ParagraphProps> = ({ children, variant = 'black', size = 'xs', addClass }) => {
  const appearances = {
    [styles.black]: variant === 'black',
    [styles.grey]: variant === 'grey',
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
  };
  return <p className={cn(styles.text, appearances, addClass)}>{children}</p>;
};
