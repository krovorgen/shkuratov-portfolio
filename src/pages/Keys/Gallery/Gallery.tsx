import React from 'react';

import styles from './Gallery.module.scss';
import { galleryData } from '../../../data/galleryData';

export const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>
          <p>
            Разные заказчики, задачи и&nbsp;количество ресурсов превращаются в&nbsp;рабочие проекты. Далеко
            не&nbsp;всегда красивая картинка это хорошо. Дизайн должен в&nbsp;первую очередь решать свою задачу.
          </p>
          <p>
            Каждый интерфейс это бесценный опыт, который накапливается от&nbsp;проекта к&nbsp;проекту и&nbsp;усиливает
            мою экспертизу.
          </p>
        </h1>
        <div className={styles.items}>
          {galleryData.map((el) => (
            <a className={styles.link} href={el.href} target="_blank" rel="noreferrer" key={el.href}>
              <div className={styles.imgWrap}>
                <img className={styles.img} width={473} height={259} src={el.imgUrl} alt="" />
              </div>
              <h3 className={styles.subtitle}>{el.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
