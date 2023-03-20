import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cn from 'classnames';

import { headerData } from '../../data/headerData';

import styles from './Header.module.scss';
import { AppRoutes } from '../../data/routes';

type HeaderProps = {
  page?: AppRoutes;
};

export const Header: FC<HeaderProps> = memo(({ page }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenBurger((v) => !v);
  }, []);

  const appearances = {
    [styles.dinamoPage]: page === AppRoutes.dinamo,
    [styles.itecPage]: page === AppRoutes.itec,
    [styles.bombaPage]: page === AppRoutes.bomba,
    [styles.ivr]: page === AppRoutes.ivr,
    [styles.transparent]: !scrolled && page === AppRoutes.ivr,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !scrolled) {
        setScrolled(true);
      } else if (scrollTop === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={cn(styles.header, appearances)}>
      <div className={`container ${styles.container}`}>
        <NavLink className={`logo ${styles.logo}`} to={AppRoutes.home}>
          <svg>
            <use xlinkHref={`./images/sprite.svg#logo`} />
          </svg>
        </NavLink>
        <div className={cn(styles.mobileContainer, { [styles.mobileContainerVisible]: isOpenBurger })}>
          <NavHeader onChangeVisibleBurger={toggleMenu} />
          <SocialHeader />
        </div>
        <button className={styles.toggleBurger} onClick={toggleMenu}>
          {isOpenBurger ? (
            <svg>
              <use xlinkHref={`./images/sprite.svg#cross`} />
            </svg>
          ) : (
            <svg>
              <use xlinkHref={`./images/sprite.svg#burger`} />
            </svg>
          )}
        </button>
        <NavHeader addClass={styles.desktopContainer} />
        <SocialHeader addClass={styles.desktopContainer} />
      </div>
    </header>
  );
});

const NavHeader: FC<{ addClass?: string; onChangeVisibleBurger?: () => void }> = ({
  addClass,
  onChangeVisibleBurger,
}) => {
  return (
    <nav className={cn(styles.menu, addClass)}>
      <ul className={styles.items} onClick={onChangeVisibleBurger}>
        <li className={styles.item}>
          <HashLink className={styles.navigation} smooth to="/#keys">
            Кейсы
          </HashLink>
        </li>
        <li className={styles.item}>
          <a className={styles.navigation} href="/EvgenyShkuratovCV.pdf" target="_blank" rel="noopener">
            Резюме
          </a>
        </li>
        <li className={styles.item}>
          <NavLink to={AppRoutes.keys} activeClassName={styles.navigationActive} className={styles.navigation}>
            Галерея проектов
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const SocialHeader: FC<{ addClass?: string }> = ({ addClass }) => {
  return (
    <ul className={cn(styles.socials, addClass)}>
      {headerData.map((item, index) => (
        <li className={styles.social} key={index}>
          <a className={cn(styles.link, 'icon', styles[item.social])} target="_blank" rel="noreferrer" href={item.href}>
            <img src={`./images/social-icon/${item.social}.svg`} alt={item.social} />
          </a>
        </li>
      ))}
    </ul>
  );
};
