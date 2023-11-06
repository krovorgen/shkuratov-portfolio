import React, { useEffect } from 'react';
import { Stats } from '../../components/Stats';
import { ivr as ivrStats } from '../../data/StatsSectionData/ivr';
import styles from './Ivr.module.scss';
import { Navigation } from '../../components/Navigation';
import { FooterKeys } from '../../components/FooterKeys';
import { Hero } from './Hero';
import cn from 'classnames';

import content1img from '../../images/ivrPage/content1.png';
import content2img from '../../images/ivrPage/content2.png';
import content3img from '../../images/ivrPage/content3.png';
import content4img from '../../images/ivrPage/content4.png';
import content5img from '../../images/ivrPage/content5.png';
import content5MobileImg from '../../images/ivrPage/content5Mobile.png';
import content61img from '../../images/ivrPage/content6-1.png';
import content62img from '../../images/ivrPage/content6-2.png';
import content63img from '../../images/ivrPage/content6-3.png';
import content64img from '../../images/ivrPage/content6-4.png';
import content65img from '../../images/ivrPage/content6-5.png';
import content66img from '../../images/ivrPage/content6-6.png';
import content7img from '../../images/ivrPage/content7.png';
import content81img from '../../images/ivrPage/content8-1.png';
import content82img from '../../images/ivrPage/content8-2.png';
import content83img from '../../images/ivrPage/content8-3.png';
import content84img from '../../images/ivrPage/content8-4.png';
import content85img from '../../images/ivrPage/content8-5.png';
import content9img from '../../images/ivrPage/content9.png';
import content10img from '../../images/ivrPage/content10.png';
import sliderContent1 from '../../images/ivrPage/sliderContent1.png';
import sliderContent2 from '../../images/ivrPage/sliderContent2.png';
import sliderContent3 from '../../images/ivrPage/sliderContent3.png';
import sliderContent4 from '../../images/ivrPage/sliderContent4.png';
import sliderContent5 from '../../images/ivrPage/sliderContent5.png';
import sliderContent6 from '../../images/ivrPage/sliderContent6.png';
import sliderContent7 from '../../images/ivrPage/sliderContent7.png';
import sliderContent8 from '../../images/ivrPage/sliderContent8.png';
import sliderContent9 from '../../images/ivrPage/sliderContent9.png';
import sliderContent10 from '../../images/ivrPage/sliderContent10.png';
import sliderContent11 from '../../images/ivrPage/sliderContent11.png';
import sliderContent12 from '../../images/ivrPage/sliderContent12.png';
import sliderContent13 from '../../images/ivrPage/sliderContent13.png';
import sliderContent14 from '../../images/ivrPage/sliderContent14.png';
import { SliderImgContent } from './SliderImgContent';
import { VideoVimeo } from './VideoVimeo';

export const Ivr = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fafafa';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <>
      <Hero />
      <Stats addClass={styles['mb160-64']} data={ivrStats} />
      <div className="container">
        <h2 className={cn(styles.subtitle, styles['mb160-64'])}>
          Ко&nbsp;мне обратился клиент у&nbsp;которого была технология, небольшая команда разработчиков
          и&nbsp;интересная идея. Моя задача учесть требования по&nbsp;функционалу, сроки, ресурс разработки
          и&nbsp;задизайнить крупный сервис
        </h2>
        <VideoVimeo addClass={styles['mb160-64']} />
        <div className={cn(styles['content--660'], styles['mb160-64'])}>
          <h3 className={styles.pretitle}>Первый этап. Сбор информации, анализ и&nbsp;проектирование</h3>
          <div className={styles.text}>
            <p>
              Вместе с&nbsp;продукт менеджером мы&nbsp;составили структуру и&nbsp;зафиксировали функционал сервиса.
              Сделали ментальную карту полной версии проекта
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img src={content1img} alt="Картинка" />
        </div>
        <div className={cn(styles.content, styles['mb160-64'])}>
          <div className={styles.text}>
            <p>
              Опираясь на&nbsp;эту структуру и&nbsp;данные после интервью с&nbsp;пользователями я&nbsp;детальнее
              расписал функционал каждого раздела
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img src={content2img} alt="Картинка" />
        </div>
        <div className={cn(styles.content, styles['mb160-64'])}>
          <div className={styles.text}>
            <p>
              После нескольких созвонов, обсуждений сроков и&nbsp;количества ресурсов на&nbsp;проекте мне предстояло
              решить задачу с&nbsp;выпуском продукта с&nbsp;ограниченными ресурсами.
            </p>
            <p>
              Для этого я&nbsp;составил карту на&nbsp;которой показал какой функционал блокирует разные разделы сервиса.
              С&nbsp;готовой дизайн-системой это позволит каждый раздел отдавать в&nbsp;работу по&nbsp;готовности, без
              необходимости ждать весь дизайн.
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img className={styles['mb48-32']} src={content3img} alt="Картинка" />
          <img src={content4img} alt="Картинка" />
        </div>
        <div className={cn(styles.content, styles['mb160-64'])}>
          <h3 className={styles.pretitle}>Прототипирование</h3>
          <div className={styles.text}>
            <p>
              После увлекательных продуктовых созвонов, анализов интервью{' '}
              <mark>(интервью и&nbsp;инсайты получены от&nbsp;продукт менеджера и&nbsp;владельца компании)</mark>{' '}
              настало время прототипов
            </p>
            <p>
              Основные сценарии использования продукта были протестированы с&nbsp;пользователям. Добавление базы
              номеров, создание скриптов звонка и&nbsp;запуск обзвона.
            </p>
          </div>
        </div>
        <SliderImgContent
          addClass={styles['mb48-32']}
          contentImgUrl={[
            sliderContent1,
            sliderContent2,
            sliderContent3,
            sliderContent4,
            sliderContent5,
            sliderContent6,
            sliderContent7,
            sliderContent8,
          ]}
          modifier="first"
        />
        <p className={cn(styles.description, styles['mb160-64'])}>
          И&nbsp;ещё десятки разных страниц, экранов и&nbsp;состояний . . .
        </p>
        <div className={cn(styles['content--520'], styles['mb160-64'])}>
          <h3 className={styles.pretitle}>Дизайн-система</h3>
          <div className={styles.text}>
            <p>
              Для быстрой и&nbsp;качественной разработки с&nbsp;возможностью лёгкого масштабирования в&nbsp;будущем
              начинаю с&nbsp;системы фронтенд компонентов из&nbsp;которых будет собираться весь сервис. Получилось{' '}
              <b>857&nbsp;компонентов</b>.
            </p>
          </div>
        </div>
      </div>
      <div className={cn(styles.whiteContainer, styles['mb160-64'])}>
        <div className="container">
          <img className={cn(styles['mb72-32'], styles.imgDesktop)} src={content5img} alt="Картинка" />
          <img className={cn(styles['mb72-32'], styles.imgMobile)} src={content5MobileImg} alt="Картинка" />
          <p className={styles.description}>И ещё куча разных компонентов . . .</p>
        </div>
      </div>
      <div className="container">
        <div className={cn(styles['content--520'], styles['mb160-64'])}>
          <h3 className={styles.pretitle}>Макеты</h3>
          <div className={styles.text}>
            <p>
              После согласования всех компонентов с&nbsp;разработчиками приступаю к&nbsp;&laquo;рисованию&raquo;
              макетов. Основная логика, тексты и&nbsp;структуру я&nbsp;уже сделал. Оформляю прототипы в&nbsp;завершенный
              продукт и&nbsp;по&nbsp;готовности сразу отдаю команде.
            </p>
            <p>
              Первым делом авторизация и&nbsp;регистрация. Её&nbsp;ничего не&nbsp;блокировало. Разработчикам было удобно
              начинать именно с&nbsp;неё.
            </p>
          </div>
        </div>
        <div className={cn(styles['gridTemplate'], styles['gridTemplate--sm'], styles['mb160-64'])}>
          <img src={content61img} alt="Картинка" />
          <img src={content62img} alt="Картинка" />
          <img src={content63img} alt="Картинка" />
          <img src={content64img} alt="Картинка" />
          <img src={content65img} alt="Картинка" />
          <img src={content66img} alt="Картинка" />
        </div>
        <div className={cn(styles.content, styles['mb128-44'])}>
          <div className={styles.text}>
            <p>
              Списки контактов. Первый раздел в&nbsp;пользовательской истории. Вначале надо добавить базу номеров, чтобы
              было кого обзванивать.
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img src={content7img} alt="Картинка" />
        </div>
        <div className={cn(styles['content--555'], styles['mb160-64'])}>
          <div className={styles.text}>
            <p>
              Дальше самое интересное&nbsp;&mdash; создание сценария звонка. Сделать удобный конструктор скриптов звонка
              была не&nbsp;тривиальная задача, но&nbsp;вместе с&nbsp;пользователями у&nbsp;меня получилось достичь
              желаемого результата.
            </p>
            <p>
              Прототипы и&nbsp;логика работы конструктора несколько раз тестировалась с&nbsp;целевой аудиторией{' '}
              <mark>(арбитражниками)</mark>
            </p>
          </div>
        </div>
        <div className={cn(styles['gridTemplate'], styles['gridTemplate--sm'], styles['mb160-64'])}>
          <img className={styles.bigImg} src={content81img} alt="Картинка" />
          <img src={content82img} alt="Картинка" />
          <img src={content83img} alt="Картинка" />
          <img src={content84img} alt="Картинка" />
          <img src={content85img} alt="Картинка" />
        </div>
        <div className={cn(styles['content--555'], styles['mb72-32'])}>
          <div className={styles.text}>
            <p>
              После того, как мы&nbsp;добавили базу номеров и&nbsp;создали сценарий звонка можно их&nbsp;соединять
              и&nbsp;создавать обзвон
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img src={content9img} alt="Картинка" />
        </div>
        <div className={cn(styles['content--520'], styles['mb160-64'])}>
          <div className={styles.text}>
            <p>После обзвона возникает потребность в&nbsp;аналитике и&nbsp;интеграциях</p>
          </div>
        </div>
        <SliderImgContent
          addClass={styles['mb160-64']}
          contentImgUrl={[
            sliderContent9,
            sliderContent10,
            sliderContent11,
            sliderContent12,
            sliderContent13,
            sliderContent14,
          ]}
          modifier="second"
        />
        <div className={cn(styles['content--520'], styles['mb160-64'])}>
          <h3 className={styles.pretitle}>Главная страница</h3>
          <div className={styles.text}>
            <p>
              В&nbsp;завершении всего этого дела для запуска не&nbsp;хватало только главной <mark>(продающей)</mark>{' '}
              страницы. Я&nbsp;сделал первую итерацию главной.
            </p>
          </div>
        </div>
        <div className={cn(styles.img, styles['mb160-64'])}>
          <img src={content10img} alt="Картинка" />
        </div>
        <h2 className={cn(styles.subtitle, styles['mb160-64'])}>
          Макеты по&nbsp;готовности отдавались в&nbsp;разработку, поэтому MVP версию запустили быстро. Основные
          пользовательские истории и&nbsp;функционал тестировались на&nbsp;этапе прототипов, поэтому критических проблем
          с&nbsp;юзабилити не&nbsp;было.
        </h2>
        <ul className={cn(styles.items, styles['mb160-64'])}>
          <li className={styles.item}>
            <a className={styles.itemLink} href="https://crmcalls.ru/" target="_blank" rel="noreferrer">
              <p className={styles.itemSubtitle}>Ссылка на сайт</p>
              <p className={styles.itemSite}>crmcalls.ru</p>
              <svg className={styles.itemSvg}>
                <use xlinkHref="./images/sprite.svg#link" />
              </svg>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.itemLink} href="https://clck.ru/33MYQj" target="_blank" rel="noreferrer">
              <p className={styles.itemSubtitle}>Ссылка на проект в Figma</p>
              <p className={styles.itemSite}>clck.ru/33MYQj</p>
              <svg className={styles.itemSvg}>
                <use xlinkHref="./images/sprite.svg#figma" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Navigation />
      <FooterKeys />
    </>
  );
};
