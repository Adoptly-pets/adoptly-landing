import Roles from '../Roles/Roles';
import './WhoCreatesAdoptly.css';
import Button from '../Button/Button';
import footprints from '../../assets/images/WhoCreatesAdoptly/footprints.webp';
import { useTranslation } from 'react-i18next';

const WhoCreatesAdoptly = () => {
  const { t } = useTranslation();
  return (
    <section className="who-creates-adoptly" id="team">
      <img
        className="footprints paws-1"
        src={footprints}
        alt="footprints"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="title-and-description">
        <h2>{t('WhoCreatesAdoptly.title')}</h2>
        <p className="description">{t('WhoCreatesAdoptly.description')}</p>
      </div>
      <Roles />
      <Button
        variant="primary"
        maxWidth={363}
        height={64}
        as="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdEJJ_VNeSAjJaVgfOhC4w7OhRxaRx-X6U_SHbBKedNDzdlGQ/viewform"
        rel="noopener noreferrer"
        style={{ margin: '0 auto' }}
      >
        {t('WhoCreatesAdoptly.button')}
      </Button>
      <img
        className="footprints paws-2"
        src={footprints}
        alt="footprint"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default WhoCreatesAdoptly;
