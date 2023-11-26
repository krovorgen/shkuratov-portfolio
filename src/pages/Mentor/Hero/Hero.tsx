import React, { FC } from 'react';

import cn from 'classnames';
import { Label } from '../../Home/Label/Label';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import evgen from '../../../images/mentorPage/Hero/evgen.png';
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
            <img src={evgen} width={612} height={623} alt="Евгений Шкуратов" />
          </div>
        </div>
      </div>
    </div>
  );
};
