import React from 'react';

import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.info}>
          <h2 className={styles.title}>Мой опыт и экспертиза</h2>
          <div className={styles.text}>
            <p>Привет! Меня зовут Евгений.</p>
            <p>
              Коммерческого опыта работы разными дизайнерами{' '}
              <mark>
                у&nbsp;меня 4&nbsp;года(на момент декабря 2021). Тут есть и&nbsp;фриланс и&nbsp;аутсорс компании
                и&nbsp;продукт.
              </mark>
            </p>
            <p>
              Есть опыт <mark>подбора и&nbsp;управления дизайн командой, выстраивания дизайн-процесса.</mark>{' '}
              В&nbsp;данный момент отвечаю за&nbsp;дизайн направление в&nbsp;ООО &laquo;Инфоурок&raquo;. Основной
              продукт компании это сайт infourok.ru.
            </p>
            <p>
              Занимаюсь <mark>проектированием интерфейсов.</mark> Тесно взаимодействую с&nbsp;бизнесом. Анализирую
              метрики, провожу качественные и&nbsp;количественные исследования. На&nbsp;основе этих иследований принимаю
              интерфейсные решения.
            </p>
            <p>Иногда разрабатываю лендинги, промо материалы, баннеры и&nbsp;т.д</p>
            <p>
              Разрабатываю и&nbsp;внедряю <mark>дизайн-систему.</mark>
            </p>
            <p>
              Когда я&nbsp;не&nbsp;занимаюсь дизайном, люблю готовить, заниматься спортом, читать и&nbsp;залипать
              в&nbsp;сериалы от&nbsp;HBO и&nbsp;NETFLIX.
            </p>
          </div>
        </div>
        <div className={styles.images}>
          <picture>
            <source srcSet="./images/author.webp" type="image/webp" />
            <source srcSet="./images/author.png" type="image/png" />
            <img src="./images/author.png" alt="Шкуратов Евгений" />
          </picture>
        </div>
      </div>
    </section>
  );
};
