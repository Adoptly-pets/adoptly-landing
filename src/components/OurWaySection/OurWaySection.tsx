import { MILESTONES_DATA } from '../../constants/MILESTOUNS_DATE';
import WayCard from '../WayCard/WayCard';

const OurWaySection = () => {
  return (
    <section className="our-way-section">
      <div className="container">
        <h2 className="section-title">Наш шлях</h2>
      </div>
      <div className="timeline">
        {MILESTONES_DATA.map(milestone => (
          <WayCard
            cardImageSrc={milestone.cardImageSrc}
            cardImgAlt={milestone.cardImgAlt}
            cardNumber={milestone.cardNumber}
            cardDate={milestone.cardDate}
            cardTitle={milestone.cardTitle}
            cardDescription={milestone.cardDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWaySection;
