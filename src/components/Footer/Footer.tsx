import { Icon } from '../Icon/Icon';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Icon id="icon-footprint" size={24} height={24} />
          <span>Adoptly 2026</span>{' '}
        </div>
        <p>Зроблено з любов’ю до тварин</p>
      </div>
    </footer>
  );
};

export default Footer;
