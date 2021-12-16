import React, { FC } from 'react';
import cn from 'classnames';

import styles from './VideoYT.module.scss';

type VideoYTProps = {
  addClass?: string;
  videoID: string;
};

export const VideoYT: FC<VideoYTProps> = ({ addClass, videoID }) => {
  return (
    <div className={cn(styles.root, addClass)}>
      <div className={styles.wrap}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
