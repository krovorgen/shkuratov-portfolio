import React from 'react';

import { LinkSocial } from '../LinkSocial';
import post1img from '../../images/instagram-posts/1.png';
import post2img from '../../images/instagram-posts/2.png';
import post3img from '../../images/instagram-posts/3.png';
import post4img from '../../images/instagram-posts/4.png';

import styles from './FooterPage.module.scss';

export const FooterPage = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.title}>Делюсь в&nbsp;инстаграме интересными мыслями и&nbsp;полезным контентом</h2>
        <ul className={styles.items}>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/Cm1ZBW4teG4/" className={styles.item}>
            <img className={styles.img} width={271} height={271} src={post1img} alt="Instagram post" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/Cl0MRgOtlxp/" className={styles.item}>
            <img className={styles.img} width={271} height={271} src={post2img} alt="Instagram post" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/Ck5wqq8tBGe/" className={styles.item}>
            <img className={styles.img} width={271} height={271} src={post3img} alt="Instagram post" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/Cne38iVtzWZ/" className={styles.item}>
            <img className={styles.img} width={271} height={271} src={post4img} alt="Instagram post" />
          </a>
        </ul>
        <LinkSocial addClass={styles.link} social="instagram">
          Перейти в instagram
        </LinkSocial>
        <p className={styles.text}>
          <span>UX/UI designer</span>
        </p>
      </div>
    </footer>
  );
};
