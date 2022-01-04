type KeysDataType = {
  name: string;
  date: string;
  title: JSX.Element;
  period: string;
};

export const keysData: KeysDataType[] = [
  {
    name: 'dinamo',
    date: 'Январь 2021',
    title: (
      <>
        Национальный олимпийский <span>стадион-динамо</span>
      </>
    ),
    period: '5 минут',
  },
  {
    name: 'itec',
    date: 'Ноябрь 2020',
    title: (
      <>
        <span>IT-курсы</span> для программистов
      </>
    ),
    period: '4 минут',
  },
  {
    name: 'bomba',
    date: 'Февраль 2021',
    title: (
      <>
        Интернет-магазин <span>пиротехники</span>
      </>
    ),
    period: '5 минут',
  },
];
