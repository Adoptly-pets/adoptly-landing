import { useTranslation } from 'react-i18next';
import { Icon } from '../Icon/Icon';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Icon id="icon-footprint" size={24} height={24} />
          <span>Adoptly 2026</span>{' '}
        </div>
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
