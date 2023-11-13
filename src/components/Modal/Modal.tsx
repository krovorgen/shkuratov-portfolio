import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import cn from 'classnames';

import closeIcon from '../../images/close.svg';

import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
  width?: number;
  boxSize?: 'xl';
  classNameBox?: string;
};

export const Modal: FC<PropsWithChildren<Props>> = memo(({ onClose, width = 700, children, boxSize, classNameBox }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div
      className={styles.root}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className={cn(classNameBox, styles.box, { [styles[boxSize!]]: boxSize })}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: `${width}px` }}
      >
        <button className={styles.cross} type="button" onClick={onClose} title="Закрыть">
          <img src={closeIcon} alt="Закрыть" />
        </button>
        {children}
      </div>
    </div>
  );
});
