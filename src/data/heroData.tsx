type HeroDataType = {
  statistics: JSX.Element | string;
  description: JSX.Element | string;
};

export const heroData: HeroDataType[] = [
  {
    statistics: <>4 <span>года</span></>,
    description: <><span>Опыт&nbsp;работы</span>&nbsp;с&nbsp;крупными проектами</>,
  },
  {
    statistics: <>50+</>,
    description: <>Реализованных <span>проектов</span></>,
  },
  {
    statistics: <>&gt;1 400 000</>,
    description: <><span>Человек</span> взаимодействуют c&nbsp;моим&nbsp;дизайном <span>ежедневно</span></>,
  },
];
