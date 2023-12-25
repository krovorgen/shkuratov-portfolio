import React, { DetailedHTMLProps, FC, LinkHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './LinkSocial.module.scss';

type DefaultLinkPropsType = DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface ILinkSociallProps {
  addClass?: string;
  href?: string;
  center?: boolean;
  social: 'telegram' | 'instagram';
}

export const LinkSocial: FC<ILinkSociallProps & DefaultLinkPropsType> = ({
  addClass,
  social,
  center,
  children,
  ...props
}) => {
  const appearances = {
    [styles.center]: center,
  };
  const hrefSocial = {
    telegram: 'https://t.me/ShkuratovDesigner/',
    instagram: 'https://www.instagram.com/shkuratovdesigner/',
  };
  return (
    <a
      className={cn(styles['link-social'], styles[social], appearances, addClass)}
      target="_blank"
      rel="noreferrer"
      href={hrefSocial[social]}
      {...props}
    >
      <span className={styles.wrap}>
        <img className={cn(styles.img, styles.imgDefault)} src={`./images/link-social/${social}.svg`} alt={social} />
        <img
          className={cn(styles.img, styles.imgHover)}
          src={`./images/link-social/${social}-hover.svg`}
          alt={social}
        />
        {children}
      </span>
    </a>
  );
};
