import dinamoImg from '../images/keys/dinamo.png';
import itecImg from '../images/keys/itec.png';
import { AppRoutes } from './routes';

type KeysDataType = {
  url: AppRoutes;
  imgPath: string;
  text: string;
  title: string;
};

export const keysData: KeysDataType[] = [
  {
    imgPath: dinamoImg,
    url: AppRoutes.dinamo,
    title: 'Национальный олимпийский стадион динамо',
    text: 'Редизайн крупного корпоративного сайта. Новый функционал покупки услуг прямо на сайте',
  },
  {
    imgPath: itecImg,
    url: AppRoutes.itec,
    title: 'IT-курсы для программистов',
    text: 'Курсы по it-специальностям с уникальной программой по трудоустройству StartWork',
  },
];
