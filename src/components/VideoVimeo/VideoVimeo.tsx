import React, { FC } from 'react';
import cn from 'classnames';

import styles from './VideoVimeo.module.scss';

type VideoVimeoProps = {
  addClass?: string;
};

export const VideoVimeo: FC<VideoVimeoProps> = ({ addClass }) => {
  return (
    <div className={cn(styles.root, addClass)}>
      <div className={styles.wrap}>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/809606352?h=10fe8c3a05&title=0&byline=0&portrait=0&sidedock=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
