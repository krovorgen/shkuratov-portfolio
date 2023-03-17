import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, LinkHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type DefaultLinkPropsType = DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface IButtonProps {
  addClass?: string;
  href?: string;
  appearances?: 'accent' | 'primary';
  variant?: 'span';
}

export const Button: FC<IButtonProps & DefaultButtonPropsType & DefaultLinkPropsType> = ({
  addClass,
  href,
  children,
  variant,
  appearances = 'primary',
  ...props
}) => {
  const appearancesVariant = {
    [styles.primary]: appearances === 'primary',
    [styles.accent]: appearances === 'accent',
  };

  if (variant === 'span') {
    return (
      <span className={cn(styles.button, appearancesVariant, addClass)} {...props}>
        {children}
      </span>
    );
  }
  return href ? (
    <a className={cn(styles.button, appearancesVariant, addClass)} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={cn(styles.button, appearancesVariant, addClass)} {...props}>
      {children}
    </button>
  );
};
