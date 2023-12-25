import React, { FC } from 'react';

import styles from './Hero.module.scss';
import { Label } from '../Label/Label';
import { Button } from '../../../components/Button/Button';
import icon1 from '../../../images/homePage/Hero/1.svg';
import icon2 from '../../../images/homePage/Hero/2.svg';
import icon3 from '../../../images/homePage/Hero/3.svg';
import icon4 from '../../../images/homePage/Hero/4.svg';
import cn from 'classnames';
import { SocialLink } from '../../../data/socialLink';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <Label className={styles.label} iconColor="green">
              12 млн человек пользуются моим дизайном
            </Label>
            <h1 className={styles.title}>
              <mark>Lead Product Designer</mark> Помогаю расти <br />
              дизайнерам и бизнесу
            </h1>
            <div className={styles.wrap}>
              <img className={cn(styles.icon, styles.icon1)} src={icon1} alt="figma" />
              <img className={cn(styles.icon, styles.icon2)} src={icon2} alt="yandex" />
              <img className={cn(styles.icon, styles.icon3)} src={icon3} alt="zoom" />
              <img className={cn(styles.icon, styles.icon4)} src={icon4} alt="miro" />
              <p>
                Управляю <span>дизайн-командой</span> в&nbsp;EdTech продукте{' '}
                <mark>&#8470;1&nbsp;по&nbsp;популярности</mark>
              </p>
            </div>
            <Button className={styles.btn} Component="a" href={SocialLink.telegram} target="_blank">
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
