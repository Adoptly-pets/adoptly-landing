import handshaking from '../../assets/images//HowItAllBegan/handshaking.webp';
import './HowItAllBeganSection.css';

const HowItAllBeganSection = () => {
  return (
    <section className="how-it-all-began-section container">
      <div className="first-block">
        <h3>Як все почалося?</h3>
        <p>
          У липні 2025 року ми об‘єдналися, щоб використати професійні навички
          для соціального проєкту. Віримо, що платформа Adoptly зробить
          прилаштування тварин простим, прозорим та доступним.
        </p>
      </div>
      <div className="second-block">
        <img
          src={handshaking}
          alt="handshaking"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h4>Народжені на Team Challenge </h4>
          <p>
            Основна команда сформувалася на платформі Team Challenge – де
            інженери, дизайнери, QA та менеджери знаходять партнерів для перших
            значущих проєктів.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowItAllBeganSection;
