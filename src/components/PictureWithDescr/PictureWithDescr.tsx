import React, { FC } from 'react';
import cn from 'classnames';

import styles from './PictureWithDescr.module.scss';

type PictureWithDescrProps = {
  addClass?: string;
  pathImg: string;
  description?: string;
};

export const PictureWithDescr: FC<PictureWithDescrProps> = ({ addClass, pathImg, description }) => {
  return (
    <>
      <div className={cn(styles.wrap, addClass)}>
        <img src={`./images/${pathImg}`} alt="Картинка" />
      </div>
      {description ? <p className={styles.text}>{description}</p> : null}
    </>
  );
};
