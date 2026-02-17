import { useTranslation } from 'react-i18next';
import { MILESTONES_DATA } from '../../constants/MILESTONES_DATE';
import WayCard from '../WayCard/WayCard';
import './OurWaySection.css';

const OurWaySection = () => {
  const { t } = useTranslation();
  return (
    <section className="our-way-section" id="roadmap">
      <div>
        <h3>{t('OurWay.title')}</h3>
        <h4 className="section-subtitle">{t('OurWay.subtitle')}</h4>
      </div>
      <div className="timeline">
        {MILESTONES_DATA.map(milestone => (
          <WayCard
            key={milestone.cardNumber}
            cardImageSrc={milestone.cardImageSrc}
            cardImgAlt={milestone.cardImgAlt ? t(milestone.cardImgAlt) : ''}
            cardNumber={milestone.cardNumber}
            cardDate={t(milestone.cardDate)}
            cardTitle={t(milestone.cardTitle)}
            cardDescription={t(milestone.cardDescription)}
            isActive={milestone.isActive}
            isFuture={milestone.isFuture}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWaySection;
