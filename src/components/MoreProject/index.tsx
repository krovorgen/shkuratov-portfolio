import React, { FC } from 'react';

import styles from './style.module.scss';

const MoreProject: FC = () => {
  return (
    <section className={styles['more-project']}>
      <div className="container">
        <h2 className={styles['more-project__title']}>И ещё много проектов. . .</h2>
      </div>
      <div className={styles['more-project__inner']}></div>
    </section>
  );
};

export default MoreProject;
