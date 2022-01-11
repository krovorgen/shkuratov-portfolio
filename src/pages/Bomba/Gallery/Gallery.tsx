import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';

import styles from './Gallery.module.scss';

export const Gallery = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <PictureWithDescr addClass={styles.fullImg} pathImg="bomba/gallery-full.png" />
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-1.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-2.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-3.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-4.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-5.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-6.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-7.png" />
        </li>
        <li className={styles.item}>
          <PictureWithDescr pathImg="bomba/gallery-8.png" />
        </li>
      </ul>
    </section>
  );
};
