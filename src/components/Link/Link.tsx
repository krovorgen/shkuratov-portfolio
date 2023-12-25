/* eslint-disable react/jsx-props-no-spreading */
import React, { AnchorHTMLAttributes, ElementType, FC, memo, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  center?: boolean;
  Component?: ElementType;
}
export const Link: FC<PropsWithChildren<LinkProps>> = memo(
  ({ className, Component = 'a', variant = 'primary', size = 'md', center, children, ...props }) => {
    return (
      <Component
        className={cn(styles.link, styles[size], styles[variant], className, {
          [styles.center]: center,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
