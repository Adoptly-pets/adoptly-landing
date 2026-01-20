import Roles from '../Roles/Roles';
import './WhoCreatesAdoptly.css';
import Button from '../Button/Button';
import footprints from '../../assets/images/WhoCreatesAdoptly/footprints.webp';

const WhoCreatesAdoptly = () => {
  return (
    <section className="who-creates-adoptly">
      <img
        className="footprints paws-1"
        src={footprints}
        alt="footprints"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <h2>Хто створює Adoptly?</h2>
      <p className="subtitle">Команда волонтерів, обʼєднаних спільною метою.</p>
      <Roles />
      <Button
        variant="primary"
        maxWidth={363}
        height={64}
        as="a"
        href=""
        rel="noopener noreferrer"
        style={{ margin: '0 auto' }}
      >
        Долучитися до команди
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
