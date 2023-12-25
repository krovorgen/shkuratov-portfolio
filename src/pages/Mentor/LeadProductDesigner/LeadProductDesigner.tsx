import React, { FC } from 'react';

import styles from './LeadProductDesigner.module.scss';
import bg from '../../../images/mentorPage/bg.png';
import { Label } from '../../Home/Label/Label';

type Props = {};

export const LeadProductDesigner: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.info}>
            <Label className={styles.label} iconColor="green">
              Почему вы можете доверять моей экспертизе
            </Label>
            <h2 className={styles.title}>Lead product designer с&nbsp;7&nbsp;летним опытом</h2>
            <div className={styles.text}>
              <p>
                В&nbsp;данный момент <mark>отвечаю за&nbsp;дизайн-направление в&nbsp;крупном it-продукте</mark>{' '}
                в&nbsp;сфере EdTech c&nbsp;12&nbsp;млн зарегистрированных пользователей и&nbsp;трафиком
                в&nbsp;25&nbsp;млн человек в&nbsp;месяц
              </p>
              <p>
                Работаю удалённо. <mark>Занимаюсь любимым делом. Путешествую</mark> и&nbsp;не&nbsp;смотрю на&nbsp;цену
                колбасы в магазине. Наслаждаюсь жизнью!
              </p>
              <p>
                Когда начинал я&nbsp;просто хотел сделать мир вокруг себя немного удобнее и&nbsp;вот к&nbsp;чему это
                меня привело. Теперь{' '}
                <mark>моя миссия привнести в&nbsp;этот мир как можно больше отличного дизайна</mark>
              </p>
              <p>
                С&nbsp;правильным подходом, постоянством и&nbsp;действиями{' '}
                <mark>вы&nbsp;быстро добьётесь полной свободы</mark>
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <img src={bg} width={571} height={678} alt="Великолепный Евгений Шкуратов" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};
