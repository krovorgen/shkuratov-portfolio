type HeroDataType = {
  statistics: JSX.Element | string;
  description: JSX.Element | string;
};

export const heroData: HeroDataType[] = [
  {
    statistics: <>&gt;1&nbsp;500&nbsp;000</>,
    description: (
      <>
        Человек взаимодействуют <br /> c&nbsp;моим дизайном ежедневно
      </>
    ),
  },
  {
    statistics: <>50+</>,
    description: (
      <>
        Реализованных <br /> проектов
      </>
    ),
  },
  {
    statistics: <>5+</>,
    description: (
      <>
        Лет опыт работы <br /> дизайнером
      </>
    ),
  },
];
