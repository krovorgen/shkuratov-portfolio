import React from 'react';

import styles from './UiDesign.module.scss';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import { VideoYT } from '../../../components/VideoYT';
import { PictureWithDescr } from '../../../components/PictureWithDescr';

export const UiDesign = () => {
  return (
    <>
      <section className={styles.root}>
        <div className="container">
          <Title addClass={styles.title} tag="h2">
            UI дизайн
          </Title>
          <Paragraph addClass={styles.text}>
            Проработка дизайн концепции и общего стиля сайта с учётом пожеланий клиента. Важно было, чтобы сайт вызывал
            доверие и уверенность
          </Paragraph>
          <VideoYT addClass={styles.video} videoID="EYtzUTSN1wM" />
          <PictureWithDescr addClass={styles.picture} pathImg="itec/ui-design-1.png" />
        </div>
      </section>
      <div className={styles.inner}>
        <div className="container">
          <Title addClass={styles.subtitle} tag="h3">
            Проработке адаптива <mark>уделялось особое</mark> внимание
          </Title>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className="container">
          <PictureWithDescr pathImg="itec/ui-design-3.png" />
        </div>
      </div>
    </>
  );
};
