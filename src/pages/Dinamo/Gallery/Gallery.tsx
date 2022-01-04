import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { VideoYT } from '../../../components/VideoYT';

import styles from './Gallery.module.scss';
import { Title } from '../../../components/Title';

export const Gallery = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <PictureWithDescr addClass={styles.office} pathImg="dinamo/gallery-1.png" />
        <PictureWithDescr addClass={styles.sportsman} pathImg="dinamo/gallery-2.png" />
        <Title addClass={styles.title} tag="h3">
          Основной путь заказа услуги на сайте
        </Title>
        <VideoYT videoID="A6tyMHHNVEg" addClass={styles.videoYT} />
      </div>
    </section>
  );
};
