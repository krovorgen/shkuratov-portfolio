import React, { FC } from 'react';

import styles from './MentorstvoForYou.module.scss';
import { Button } from '../../../components/Button/Button';
import { SocialLink } from '../../../data/socialLink';

type Props = {};

export const MentorstvoForYou: FC<Props> = () => (
  <section className={styles.root}>
    <div className="container">
      <div className={styles.wrap}>
        <h2 className={styles.title}>Менторство для вас, только если</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <p className={styles.text}>
                  Прошли курсы, но&nbsp;почему-то не&nbsp;<mark>можете найти работу</mark> или чувствуете себя
                  неуверенно
                </p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>
                  Долго <mark>работаете без роста и&nbsp;повышений</mark> и&nbsp;хотите сдвинуться с&nbsp;мертвой точки
                </p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>
                  Часто страдаете от&nbsp;синдрома самозванца и&nbsp;хотите повысить уровень в&nbsp;дизайне
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <p className={styles.text}>
                  <mark>Боитесь откликаться на&nbsp;вакансии</mark>, потому что там слишком много непонятных требований
                </p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Хотите перейти в&nbsp;продуктовый дизайн из&nbsp;другой области дизайна</p>
              </li>
              <li className={styles.element}>
                <p className={styles.text}>Чувствуете неуверенность когда речь о&nbsp;сложных интерфейсах</p>
              </li>
            </ul>
          </li>
        </ul>
        <Button className={styles.btn} center variant="accent" Component="a" href={SocialLink.telegram} target="_blank">
          Это про меня, давайте пообщаемся!
        </Button>
      </div>
    </div>
  </section>
);
