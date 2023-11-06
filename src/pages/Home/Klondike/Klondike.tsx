import React, { FC } from 'react';

import styles from './Klondike.module.scss';
import cn from 'classnames';
import { Label } from '../Label/Label';
import { Button } from '../../../components/Button/Button';

type Props = {};

export const Klondike: FC<Props> = () => {
  return (
    <section className={styles.root} id="klondike">
      <div className="container">
        <div className={styles.wrap}>
          <Label className={styles.label} iconColor="red" center>
            Бесплатный клондайк
          </Label>
          <h2 className={styles.title}>
            <mark>200+</mark> файлов и ссылок для&nbsp;дизайнеров
          </h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <p className={styles.text}>HR-агенства</p>
                </li>
                <li className={styles.element}>
                  <p className={cn(styles.text, styles.textAccent)}>Рекрутёры</p>
                </li>
                <li className={styles.element}>
                  <p className={cn(styles.text, styles.textAccent)}>Заказы и вакансии</p>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <p className={styles.text}>Видео</p>
                </li>
                <li className={styles.element}>
                  <p className={styles.text}>Иконки</p>
                </li>
                <li className={styles.element}>
                  <p className={styles.text}>UI-киты</p>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <p className={styles.text}>Иллюстрации</p>
                </li>
                <li className={styles.element}>
                  <p className={styles.text}>UX-фреймворки</p>
                </li>
                <li className={styles.element}>
                  <p className={styles.text}>Дизайн системы</p>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <p className={styles.text}>Вдохновение</p>
                </li>
                <li className={styles.element}>
                  <p className={styles.text}>Эксперты</p>
                </li>
                <li className={styles.element}>
                  <p className={cn(styles.text, styles.textAccent)}>Дизайн-студии</p>
                </li>
              </ul>
            </li>
          </ul>
          <Button className={styles.btn} variant="accent" center>
            Получить доступ бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
};
