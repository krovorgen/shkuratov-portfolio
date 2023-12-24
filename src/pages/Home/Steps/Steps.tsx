import React, { FC } from 'react';

import styles from './Steps.module.scss';
import { Label } from '../Label/Label';
import cn from 'classnames';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';

type Props = {};

export const Steps: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <Label className={styles.label} iconColor="white" center>
          Мой путь и опыт в дизайне
        </Label>
        <h2 className={styles.title}>С 2017 года занимаюсь дизайном</h2>
        <div className={styles.inner}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <p className={cn(styles.year, styles.yearPrimary)}>2017</p>
              <div className={styles.text}>
                <p className={styles.max400}>
                  <mark>Верстаю</mark> сайты на&nbsp;фрилансе. В&nbsp;то&nbsp;время практически не&nbsp;было курсов
                  и&nbsp;<mark>всему обучался</mark> сам по&nbsp;документациям
                </p>
                <p>
                  В&nbsp;каждом заказе мне <mark>приходилось исправлять макеты</mark>, потому что мог лучше...
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <p className={cn(styles.year, styles.yearPrimary)}>2018</p>
              <div className={styles.text}>
                <p>
                  <mark>Первые заказы на&nbsp;дизайн</mark> получил от&nbsp;старых заказчиков по&nbsp;верстке
                </p>
                <p>
                  Весь <mark>год делал сайты</mark> на&nbsp;фрилансе
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <p className={cn(styles.year, styles.yearPrimary)}>2019</p>
              <div className={styles.text}>
                <p className={styles.max400}>
                  Наработал <mark>опыт и&nbsp;портфолио</mark> из&nbsp;реальных проектов
                </p>
                <p className={styles.max400}>Начал думать куда расти дальше и&nbsp;как перестать рисовать картинки</p>
                <p>
                  Получил <mark>оффер от&nbsp;канадской it-компании</mark>. Поработал с&nbsp;крупными канадскими
                  проектами
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <p className={cn(styles.year, styles.yearAccent)}>2020</p>
              <div className={styles.text}>
                <p className={styles.max400}>
                  Оффер и&nbsp;<mark>переход в&nbsp;Инфоурок</mark> (крупная продуктовая it-компания)
                </p>
                <p>
                  Постоянное <mark>обучение, работа 24/7</mark> и&nbsp;развитие
                </p>
                <p>
                  Мощности продукта (21&nbsp;млн посетителей в&nbsp;месяц) позволили{' '}
                  <mark>вырасти в&nbsp;исследованиях и&nbsp;продуктовом дизайне</mark>, т.к можно быстро и&nbsp;часто
                  запускать А/Б тесты, проводить юзабилити тестирования, интервью и т.д
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <p className={cn(styles.year, styles.yearAccent)}>2023</p>
              <div className={styles.text}>
                <p>
                  Вместе с&nbsp;продуктом <mark>вырос в&nbsp;полноценного лида со&nbsp;своей командой</mark>
                </p>
                <p className={styles.max400}>
                  Сейчас я&nbsp;регулярно оттачиваю свои навыки и&nbsp;
                  <mark>делюсь опытом и экспертизой с&nbsp;другими дизайнерами</mark>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Button className={styles.btn} size="xxl" center Component="a" href={SocialLink.telegram} target="_blank">
          Бесплатная консультация
        </Button>
      </div>
    </div>
  );
};
