import React, { FC } from 'react';
import cn from 'classnames';

import { Paragraph } from '../Paragraph';

import styles from './DescriptionKeys.module.scss';

type PictureWithDescrProps = {
  addClass?: string;
  link: string;
  description?: string;
};

export const DescriptionKeys: FC<PictureWithDescrProps> = ({ addClass, description, link }) => {
  return (
    <div className={cn(styles.root, addClass)}>
      <div className="container">
        <Paragraph size="sm" addClass={styles.text}>
          {description}
        </Paragraph>
        <a className={styles.link} href={`https://${link}`}>
          <span className={styles.subtitle}>Ссылка на сайт</span>
          <span className={styles.site}>{link}</span>
          <svg className={styles.svg}>
            <use xlinkHref={`./images/sprite.svg#link`} />
          </svg>
        </a>
      </div>
    </div>
  );
};
