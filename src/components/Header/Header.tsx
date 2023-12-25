import React, { FC, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import instagram from '../../images/social-icons/instagram.svg';
import linkedin from '../../images/social-icons/linkedin.svg';
import burger from '../../images/Header/burger.svg';
import burgerClose from '../../images/close.svg';
import { Link as AnchorLink } from 'react-scroll';

import cn from 'classnames';

import styles from './Header.module.scss';
import { AppRoutes } from '../../data/routes';
import { Link as LinkUI } from '../Link/Link';
import { SocialLink } from '../../data/socialLink';
import { Button } from '../Button/Button';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const location = useLocation();
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleMenu = () => {
    setIsOpenBurger((v) => !v);
  };

  useEffect(() => {
    if (isOpenBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpenBurger]);

  const isMainPage = location.pathname === '/';

  const klondikeLink = (isMobileMenu: boolean = false) =>
    isMainPage ? (
      <AnchorLink to="klondike" duration={350} smooth onClick={isMobileMenu ? toggleMenu : undefined}>
        <LinkUI Component="span">Клондайк дизайнера</LinkUI>
      </AnchorLink>
    ) : (
      <Link to="/#klondike" onClick={isMobileMenu ? toggleMenu : undefined}>
        <LinkUI Component="span">Клондайк дизайнера</LinkUI>
      </Link>
    );

  const orderDesignLink = () => <LinkUI href={SocialLink.telegram}>Заказать дизайн</LinkUI>;

  const keysLink = (isMobileMenu: boolean = false) =>
    isMainPage ? (
      <AnchorLink to="keys" duration={450} smooth onClick={isMobileMenu ? toggleMenu : undefined}>
        <LinkUI Component="span">Портфолио</LinkUI>
      </AnchorLink>
    ) : (
      <Link to="/#keys" onClick={isMobileMenu ? toggleMenu : undefined}>
        <LinkUI Component="span">Портфолио</LinkUI>
      </Link>
    );

  const mtrLink = (isMobileMenu: boolean = false) => (
    <NavLink
      className={({ isActive }) => (isActive ? styles.activeLink : '')}
      to={AppRoutes.mtr}
      onClick={isMobileMenu ? toggleMenu : undefined}
    >
      <LinkUI Component="span">Менторство</LinkUI>
    </NavLink>
  );

  return (
    <>
      <header className={cn(styles.header)}>
        <div className={`container ${styles.container}`}>
          <Link className={styles.logo} to={AppRoutes.home}>
            <img src={logo} alt="Логотип" />
          </Link>
          <ul className={styles.items}>
            <li className={styles.item}>{klondikeLink()}</li>
            <li className={cn(styles.item, styles.itemMobile)}>{mtrLink()}</li>
            <li className={styles.item}>{orderDesignLink()}</li>
            <li className={styles.item}>{keysLink()}</li>
          </ul>
          <SocialsLinks />
          <button className={styles.burger} type="button" onClick={toggleMenu}>
            <img src={burger} alt="Открыть меню" />
          </button>
        </div>
      </header>
      <div className={cn(styles.mobileMenu, { [styles.mobileMenuOpen]: isOpenBurger })}>
        <div className={styles.mobileMenuBg}>
          <button className={styles.mobileMenuBurger} type="button" onClick={toggleMenu}>
            <img src={burgerClose} alt="Открыть меню" />
          </button>
          <ul className={styles.mobileMenuList}>
            <li className={styles.mobileMenuItem}>{klondikeLink(true)}</li>
            <li className={styles.mobileMenuItem}>{mtrLink(true)}</li>
            <li className={styles.mobileMenuItem}>{orderDesignLink()}</li>
            <li className={styles.mobileMenuItem}>{keysLink(true)}</li>
            <li className={styles.mobileMenuItem}>
              <SocialsLinks isMobile />
            </li>
          </ul>
          <Button className={styles.mobileMenuBtn} block Component="a" href={SocialLink.telegram} target="_blank">
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </>
  );
};

const SocialsLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <ul className={cn(styles.elements, { [styles.elementsMobile]: isMobile })}>
      <li className={styles.element}>
        <a className={styles.social} href={SocialLink.instagram} target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li className={styles.element}>
        <a className={styles.social} href={SocialLink.linkedin} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
      </li>
    </ul>
  );
};
