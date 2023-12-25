import React from 'react';

import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';

import styles from './Briffing.module.scss';

export const Briffing = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <Title tag="h2" addClass={styles.title}>
          Брифинг, сбор информации от заинтересованных лиц
        </Title>
        <Paragraph addClass={styles.text}>
          Встретились с разработчиком и владельцем магазина. Обсудили целевую аудиторию, основные проблемы процессов и
          сайта. Как и для чего обычно люди заказывают продукцию и т.д
        </Paragraph>
      </div>
    </section>
  );
};
