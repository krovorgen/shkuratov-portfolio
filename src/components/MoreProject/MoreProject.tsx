import React, { FC } from 'react';

import styles from './MoreProject.module.scss';

export const MoreProject: FC = () => {
  return (
    <section className={styles.root} id="project">
      <div className="container">
        <h2 className={styles.title}>И ещё много проектов. . .</h2>
      </div>
      <div className={styles.inner} />
    </section>
  );
};
