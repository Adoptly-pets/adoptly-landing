import Roles from '../Roles/Roles';
import './WhoCreatesAdoptly.css';
import Button from '../Button/Button';

const WhoCreatesAdoptly = () => {
  return (
    <section className="who-creates-Adoptly">
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
    </section>
  );
};

export default WhoCreatesAdoptly;
