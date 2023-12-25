import React, { FC } from 'react';

import { Modal } from '../Modal';
import styles from './AccessToCollection.module.scss';
import { Button } from '../../Button/Button';
import { SocialLink } from '../../../data/socialLink';
import klondaik from '../../../images/homePage/AccessToCollection/klondaik.png';

type Props = {
  onClose: () => void;
};

export const AccessToCollection: FC<Props> = ({ onClose }) => {
  return (
    <Modal boxSize="xl" classNameBox={styles.box} onClose={onClose}>
      <h2 className={styles.title}>
        Доступ к коллекции высылаю <mark>в инстаграме</mark> по&nbsp;кодовому слову
      </h2>
      <div className={styles.mobileImg}>
        <img src={klondaik} alt="Клондайк" />
      </div>
      <p className={styles.text}>
        Напишите мне <mark>в&nbsp;директ &laquo;Клондайк&raquo;</mark> и&nbsp;я&nbsp;открою вам доступ
      </p>
      <Button className={styles.btn} Component="a" href={SocialLink.instagram} target="_blank">
        Перейти в инстаграм
      </Button>
    </Modal>
  );
};
