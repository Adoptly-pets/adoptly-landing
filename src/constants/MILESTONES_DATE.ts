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
  isFuture?: boolean;
}

export const MILESTONES_DATA: MilestonesData[] = [
  {
    cardImageSrc: startImg,
    cardImgAlt: 'OurWay.milestones.start.cardImgAlt',
    cardNumber: '01',
    cardDate: 'OurWay.milestones.start.date',
    cardTitle: 'OurWay.milestones.start.title',
    cardDescription: 'OurWay.milestones.start.description',
    isActive: false,
  },
  {
    cardImageSrc: developImg,
    cardImgAlt: 'OurWay.milestones.development.cardImgAlt',
    cardNumber: '02',
    cardDate: 'OurWay.milestones.development.date',
    cardTitle: 'OurWay.milestones.development.title',
    cardDescription: 'OurWay.milestones.development.description',
    isActive: true,
  },
  {
    cardImageSrc: releaseImg,
    cardImgAlt: 'OurWay.milestones.release.cardImgAlt',
    cardNumber: '03',
    cardDate: 'OurWay.milestones.release.date',
    cardTitle: 'OurWay.milestones.release.title',
    cardDescription: 'OurWay.milestones.release.description',
    isActive: false,
    isFuture: true,
  },
];
