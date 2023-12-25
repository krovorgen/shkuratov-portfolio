import React, { FC } from 'react';

import img1 from '../../../images/mentorPage/Steps/img1.png';
import img2 from '../../../images/mentorPage/Steps/img2.png';
import img3 from '../../../images/mentorPage/Steps/img3.png';

import styles from './Steps.module.scss';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import cn from 'classnames';

type Props = {};

export const Steps: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={img1} width={600} height={400} alt="" loading="lazy" />
            </div>
            <div className={cn(styles.info, styles.infoRightPadding)}>
              <h2 className={styles.title}>
                <mark>Обучаетесь 1&nbsp;на 1</mark>
                <br />+ Пожизненная поддержка
              </h2>
              <div className={cn(styles.text, styles.textWidth447)}>
                <p>
                  Выявим <mark>ваши сильные стороны</mark> и&nbsp;сделаем их&nbsp;ещё сильнее.{' '}
                  <mark>Получите индивидуальный план развития</mark> с&nbsp;практическими заданиями
                </p>
                <p>
                  Никаких заранее подготовленных модулей и&nbsp;программ.&nbsp;
                  <mark>Формат и&nbsp;контент строятся индивидуально&nbsp;под вас</mark>, ваш опыт, знания и&nbsp;запрос
                </p>
              </div>
              <Button className={styles.btn} Component="a" href={SocialLink.telegram} target="_blank">
                Бесплатная консультация
              </Button>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={img2} width={600} height={276} alt="" loading="lazy" />
            </div>
            <div className={cn(styles.info, styles.infoLeftPadding)}>
              <h2 className={styles.title}>
                Консультируетесь с&nbsp;<mark>HR специалистом</mark>
              </h2>
              <div className={cn(styles.text, styles.textWidth420)}>
                <p>
                  У&nbsp;вас будет возможность <mark>проконсультироваться с&nbsp;действующим hr&nbsp;специалистом</mark>{' '}
                  в&nbsp;крупнейшей компании. Ежемесячно они нанимают десятки сотрудников из&nbsp;it-сферы
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={img3} width={600} height={400} alt="" loading="lazy" />
            </div>
            <div className={styles.info} style={{ maxWidth: '431px' }}>
              <h2 className={styles.title}>
                Проходите <mark>реальное собеседование</mark>
              </h2>
              <div className={cn(styles.text, styles.textWidth431)}>
                <p>
                  В&nbsp;конце обучения вы&nbsp;пройдете{' '}
                  <mark>
                    собеседование с&nbsp;дизайнером из&nbsp;крупной международной <span>it-компании</span>
                  </mark>{' '}
                  (при желании на&nbsp;английском языке)
                </p>
                <p>
                  По&nbsp;итогам собеседования вы&nbsp;
                  <mark>получите подробный&nbsp;разбор ваших компетенций, грейд и&nbsp;зарплатную вилку</mark> на
                  которую можете претендовать&nbsp;на&nbsp;разных&nbsp;рынках
                </p>
              </div>
              <Button className={styles.btn} Component="a" href={SocialLink.telegram} target="_blank">
                Бесплатная консультация
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
