import React, { FC, PropsWithChildren } from 'react';

import whiteStar from '../../../images/stars/white.svg';
import redStar from '../../../images/stars/red.svg';
import greenStar from '../../../images/stars/green.svg';

import styles from './Label.module.scss';
import cn from 'classnames';

type Props = {
  iconColor: 'white' | 'red' | 'green';
  center?: boolean;
  className?: string;
};

export const Label: FC<PropsWithChildren<Props>> = ({ iconColor, children, center, className }) => {
  const getIcon = () => {
    switch (iconColor) {
      case 'white':
        return whiteStar;
      case 'red':
        return redStar;
      case 'green':
        return greenStar;
    }
  };

  return (
    <div className={cn(styles.root, className, { [styles.center]: center })}>
      <img loading="lazy" src={getIcon()} alt="Звёздочка" />
      {children}
    </div>
  );
};
