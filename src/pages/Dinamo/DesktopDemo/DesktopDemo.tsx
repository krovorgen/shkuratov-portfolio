import React from 'react';

import { PictureWithDescr } from '../../../components/PictureWithDescr';
import { Title } from '../../../components/Title';

import styles from './DesktopDemo.module.scss';

export const DesktopDemo = () => {
  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Title tag="h3" addClass={styles.subtitle}>
          <mark>Desctop</mark>
        </Title>
        <ul className={styles.items}>
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <li className={styles.item} key={index}>
                <PictureWithDescr pathImg={`dinamo/desktop-demo-${index + 1}.png`} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
