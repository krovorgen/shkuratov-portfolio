import React, { FC } from 'react';

import styles from './FreeConsultation.module.scss';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import { Label } from '../../Home/Label/Label';

type Props = {};

export const FreeConsultation: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.wrap}>
          <Label className={styles.label} center iconColor="green">
            Путь в 1000 миль начинается с первого шага
          </Label>
          <h2 className={styles.title}>
            Записывайтесь <br />
            на бесплатную <br />
            консультацию
          </h2>
          <p className={styles.text}>
            Это <mark>ни&nbsp;к&nbsp;чему не&nbsp;обязывает</mark>. Созвонимся, разберём вашу текущую ситуацию. Обсудим
            ваши цели и&nbsp;что делать дальше. Выясним, чем я&nbsp;могу вам помочь и&nbsp;
            <mark>подходим&nbsp;ли мы&nbsp;друг другу</mark>
          </p>
          <Button className={styles.btn} size="xxl" center Component="a" href={SocialLink.telegram} target="_blank">
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </div>
  );
};
