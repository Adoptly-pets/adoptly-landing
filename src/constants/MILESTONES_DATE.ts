import startImg from '../assets/images/OurWay/start-icon.webp';
import developImg from '../assets/images/OurWay/develop-icon.webp';
import releaseImg from '../assets/images/OurWay/release-icon.webp';

export interface MilestonesData {
  cardImageSrc: string;
  cardImgAlt?: string;
  cardNumber: string;
  cardDate: string;
  cardTitle: string;
  cardDescription: string;
  isActive: boolean;
}

export const MILESTONES_DATA: MilestonesData[] = [
  {
    cardImageSrc: startImg,
    cardImgAlt: 'старт  ',
    cardNumber: '01',
    cardDate: 'липень 2025',
    cardTitle: 'Старт ініціативи',
    cardDescription:
      'Збір команди на Team Challenge та визначення місії проєкту.',
    isActive: false,
  },
  {
    cardImageSrc: developImg,
    cardImgAlt: 'розробка ',
    cardNumber: '02',
    cardDate: 'активна фаза',
    cardTitle: 'Розробка MVP',
    cardDescription:
      'Архітектура, дизайн, написання коду та тестування функціоналу.',
    isActive: true,
  },
  {
    cardImageSrc: releaseImg,
    cardImgAlt: 'реліз ',
    cardNumber: '03',
    cardDate: 'лютий 2026',
    cardTitle: 'Реліз платформи',
    cardDescription:
      'Запуск першої версії сайту для перших притулків-партнерів.',
    isActive: false,
  },
];
