import React, { FC } from 'react';

import styles from './ForWhom.module.scss';
import { Label } from '../Label/Label';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../data/routes';

type Props = {};

export const ForWhom: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Label className={styles.label} iconColor="red" center>
              Для дизайнеров
            </Label>
            <h2 className={styles.title}>Менторство</h2>
            <p className={styles.text}>Помогу найти первую работу или&nbsp;получить&nbsp;повышение</p>
            <div className={styles.nav}>
              <Button className={styles.btn} Component="a" href={SocialLink.telegram} target="_blank">
                Бесплатная консультация
              </Button>
              <Link to={AppRoutes.mtr} className={styles.btn}>
                <Button variant="accent" Component="span">
                  Подробнее
                </Button>
              </Link>
            </div>
          </li>
          <li className={styles.item}>
            <span id="order-design" style={{ position: 'relative', top: '-150px' }} />
            <Label className={styles.label} iconColor="red" center>
              Для предпринимателей
            </Label>
            <h2 className={styles.title}>Заказать дизайн</h2>
            <p className={styles.text}>Создам интерфейс для нового проекта или&nbsp;улучшу уже существующий</p>
            <div className={styles.nav}>
              <Button className={styles.btn} variant="accent" Component="a" href={SocialLink.telegram} target="_blank">
                Обсудить проект
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
