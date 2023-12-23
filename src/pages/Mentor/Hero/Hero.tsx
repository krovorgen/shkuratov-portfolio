import React, { FC } from 'react';

import cn from 'classnames';
import { Label } from '../../Home/Label/Label';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import evgen from '../../../images/mentorPage/Hero/evgen.png';
import icon1 from '../../../images/mentorPage/Hero/1.svg';
import icon2 from '../../../images/mentorPage/Hero/2.svg';
import icon3 from '../../../images/mentorPage/Hero/3.svg';
import icon4 from '../../../images/mentorPage/Hero/4.svg';
import styles from './Hero.module.scss';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.info}>
            <ul className={styles.tags}>
              <li className={styles.tag}>
                <Label iconColor="green">Менторство</Label>
              </li>
              <li className={styles.tag}>
                <Label iconColor="green">35 дней</Label>
              </li>
            </ul>
            <h1 className={styles.title}>
              Выйдите на <mark>новый уровень в дизайне</mark> с&nbsp;наставником
            </h1>
            <p className={styles.text}>
              Интенсивное <mark>обучение 1 на 1</mark> со мной и приглашенными специалистами
            </p>
            <Button className={styles.btn} Component="a" href={SocialLink.telegram} target="_blank">
              Бесплатная консультация
            </Button>
          </div>
          <div className={styles.img}>
            <img className={cn(styles.icon, styles.icon1)} src={icon1} alt="" />
            <img className={cn(styles.icon, styles.icon2)} src={icon2} alt="" />
            <img className={cn(styles.icon, styles.icon3)} src={icon3} alt="" />
            <img className={cn(styles.icon, styles.icon4)} src={icon4} alt="" />
            <TopLineSvg />
            <MiddleLineSvg />
            <BottomLineSvg />
            <img className={styles.evgen} src={evgen} width={575} height={623} alt="Евгений Шкуратов" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TopLineSvg = () => (
  <svg
    className={cn(styles.line, styles.lineTop)}
    width="233"
    height="164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity=".8" filter="url(#a)">
      <path
        d="M21.757 142.742C64.285 76.877 134.953 36.727 211.229 21"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="a"
        x=".756"
        y="0"
        width="231.473"
        height="163.742"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_710_11" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_710_11" result="shape" />
      </filter>
    </defs>
  </svg>
);
const MiddleLineSvg = () => (
  <svg
    className={cn(styles.line, styles.lineMiddle)}
    width="547"
    height="259"
    viewBox="0 0 547 259"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8" filter="url(#filter0_d_710_12)">
      <path
        d="M363.229 29.1591C363.73 29.0623 364.23 28.9664 364.729 28.8713C458.574 11.0025 531.408 22.2309 524.949 76.2461C507.168 224.927 -48.2703 337.566 28.2295 103.066C31.4599 93.1634 36.8893 79.8398 41.5 70.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_710_12"
        x="0"
        y="0"
        width="546.347"
        height="258.896"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_710_12" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_710_12" result="shape" />
      </filter>
    </defs>
  </svg>
);

const BottomLineSvg = () => (
  <svg
    className={cn(styles.line, styles.lineBottom)}
    width="608"
    height="237"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity=".8" filter="url(#c)">
      <path
        d="M586.5 49c-101 146.501-539.28 244.743-563.28 82.681C17.492 93.011 31.803 55.602 59 21.134"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="c"
        x=".97"
        y=".134"
        width="606.53"
        height="236.279"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_386_2112" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_386_2112" result="shape" />
      </filter>
    </defs>
  </svg>
);
