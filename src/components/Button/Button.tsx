/* eslint-disable react/jsx-props-no-spreading */
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, FC, memo, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  center?: boolean;
  block?: boolean;
  Component?: ElementType;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export const Button: FC<PropsWithChildren<ButtonProps & AnchorProps>> = memo(
  ({ className, block, Component = 'button', variant = 'primary', size = 'md', center, children, ...props }) => {
    return (
      <Component
        className={cn(styles.btn, styles[size], styles[variant], className, {
          [styles.center]: center,
          [styles.block]: block,
        })}
        type="button"
        {...props}
      >
        {children}
      </Component>
    );
  }
);
